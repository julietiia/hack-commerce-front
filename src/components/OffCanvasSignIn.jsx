
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import CheckoutLoginForm from "./CheckoutLogInForm"

function OffCanvasSignIn({ showSignIn, handleCloseSignIn, handleShowSignIn, ...props }) {
  const navigate = useNavigate();

  return (
    <>
      <Offcanvas show={showSignIn} onHide={handleCloseSignIn} {...props} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign in</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <CheckoutLoginForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasSignIn;
