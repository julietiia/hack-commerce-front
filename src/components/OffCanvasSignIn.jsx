import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate, Link } from "react-router-dom";
import CheckoutLoginForm from "./CheckoutLogInForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

function OffCanvasSignIn({
  showSignIn,
  handleCloseSignIn,
  handleShowSignIn,
  ...props
}) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    setIsLoading(true);
    await axios({
      method: "delete",
      url: `${import.meta.env.VITE_PORT_URL}/reset`,
    });
    setIsLoading(false)
  };
  return (
    <>
      <Offcanvas
        show={showSignIn}
        onHide={handleCloseSignIn}
        {...props}
        placement={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {!user.token ? "Login" : "My profile"}{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column">
          <div className="profile">
            {!user.token ? <CheckoutLoginForm /> : <UserProfile />}
          </div>
          <button
            onClick={(event) => handleClick(event)}
            className="btn btn-danger mt-3 reset"
          >
            Reset database
            {isLoading && <Spinner />}
          </button>
          <small className="text-center text-danger">*Press to improve the experience </small> 
          <Link to="https://hack-commerce-admin.vercel.app/admin-login">
            <button
              type="submit"
              className="col-12 btn btn-outline-dark check-out-button rounded mt-3"
            >
              Login as admin
            </button>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
// border border-black border-3 rounded p-3

export default OffCanvasSignIn;
