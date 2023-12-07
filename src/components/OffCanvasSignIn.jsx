import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
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

                <Offcanvas.Body>
                    <div className="border border-black border-3 rounded p-3 ">
                        {!user.token ? <CheckoutLoginForm />  : <UserProfile /> }
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasSignIn;
