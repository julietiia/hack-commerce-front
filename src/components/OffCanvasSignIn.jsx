import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate, Link } from "react-router-dom";
import CheckoutLoginForm from "./CheckoutLogInForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux/es/hooks/useSelector";


function OffCanvasSignIn({
    showSignIn,
    handleCloseSignIn,
    handleShowSignIn,
    ...props
}) {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

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
                    {!user.token ? "Login" : "My profile" } </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="d-flex flex-column">
                  
                    <div className="profile">
                        {!user.token ? <CheckoutLoginForm />  : <UserProfile /> }
                        
                    </div>
                    <Link to= "https://hack-commerce-admin.vercel.app/admin-login">
                    <button type="submit" className="col-12 btn btn-outline-dark check-out-button rounded mt-3">
        Login as admin
      </button></Link>
                </Offcanvas.Body>
               
            </Offcanvas>
        </>
    );
}
// border border-black border-3 rounded p-3

export default OffCanvasSignIn;
