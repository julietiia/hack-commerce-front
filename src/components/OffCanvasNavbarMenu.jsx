import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import OffCanvasSignIn from "./OffCanvasSignIn";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/categories`,
      });
      setCategories(response.data.categories);
    };

    getCategories();
  }, []);

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
          <Nav className="d-flex justify-content-end">
            <NavLink
              className="nav-link custom-item text-black"
              to="/"
              onClick={handleCloseMenu}
            >
              home
            </NavLink>
            <NavLink
              className="nav-link custom-item text-black"
              to="/shop"
              onClick={handleCloseMenu}
            >
              shop
            </NavLink>
            <NavLink
              className="nav-link custom-item text-black"
              to="/about-this-project"
              onClick={handleCloseMenu}
            >
              about this project
            </NavLink>

            <NavDropdown
              className="text-black"
              title="categories"
              id="basic-nav-dropdown"
            >
              {categories.map((category) => (
                <NavLink
                  className="dropdown-item"
                  to={`/category/${category.id}`}
                  key={category.id}
                  onClick={handleCloseMenu}
                >
                  {category.name}
                </NavLink>
              ))}
            </NavDropdown>
          </Nav>
          <div className="shop-profile d-flex justify-content-end">
            <i className="bi bi-search lupita d-block px-3"></i>
            
            <i
              onClick={(event) => handleShowSignIn(event)}
              className="bi bi-person profile-icon d-block px-3"
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
