import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "./Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import "./css/App.css";
import { useNavigate, NavLink } from "react-router-dom";
import OffCanvasSignIn from "./OffCanvasSignIn";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";

function OffCanvasNavbarMenu({
  showMenu,
  handleShowSignIn,
  handleCloseMenu,
  handleToggleMenu,
  showCart,
  handleCloseCart,
  showSignIn,
  handleCloseSignIn,
   ...props
}) {


  return (
    <>
      <Offcanvas
        show={showMenu}
        onHide={handleCloseMenu}
        {...props}
        placement={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto">
            <NavLink className="nav-link custom-item" to="/">
              home
            </NavLink>
            <NavLink className="nav-link custom-item" to="/shop">
              shop
            </NavLink>
            <NavLink
              className="nav-link custom-item text-black"
              to="/about-this-project"
            >
              about this project
            </NavLink>

            <NavDropdown
              className="text-black"
              title="categories"
              id="basic-nav-dropdown"
            >
              <NavLink className="dropdown-item" to="/category/chairs">
                chairs
              </NavLink>
              <NavLink className="dropdown-item" to="/category/sofas">
                sofas
              </NavLink>
              <NavLink className="dropdown-item" to="/category/tables">
                tables
              </NavLink>
              <NavLink className="dropdown-item" to="/category/lightning">
                lightning
              </NavLink>
              <NavLink className="dropdown-item" to="/category/storage">
                storage&organization
              </NavLink>
              <NavLink className="dropdown-item" to="/category/deco">
                deco
              </NavLink>
            </NavDropdown>
          </Nav>
          <div className="shop-profile d-flex">
            <i className="bi bi-search lupita d-block"></i>
            <i
              onClick={(event) => handleShowCart(event)}
              className="bi bi-cart3 carrito-icon"
            ></i>
            <i
              onClick={(event) => handleShowSignIn(event)}
              className="bi bi-person profile-icon d-block"
            ></i>
          </div>
        </Offcanvas.Body>
        <OffCanvasShoppingCart
            showCart={showCart}
            handleCloseCart={() => setShowCart(false)}
          />
             <OffCanvasSignIn
              showSignIn={showSignIn}
              handleCloseSignIn={() => setShowSignIn(false)}
            />
      </Offcanvas>
    </>
  );
}

export default OffCanvasNavbarMenu;
