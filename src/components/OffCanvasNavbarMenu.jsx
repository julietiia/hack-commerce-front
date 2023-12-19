import Offcanvas from "react-bootstrap/Offcanvas";
import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import OffCanvasSignIn from "./OffCanvasSignIn";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";
import "../components/css/OffCanvasMenu.css";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.user.firstname);

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
        <Offcanvas.Body className="off-menu-body">
          <Nav className="col-5 off-user-body">
            <div className="off-icon-container">
              <i className="bi bi-search nav-icon"></i>
            </div>
            <div className="off-icon-container">
              <i
                className="bi bi-person off-icon-profile"
                onClick={(event) => handleShowSignIn(event)}
              ></i>
              {user && (
                <span className="position-absolute top-0 start-50 translate-middle-y badge rounded-pill ">
                  {user}
                </span>
              )}
            </div>
          </Nav>

          <Nav className="col-7 off-menu-container">
            <NavLink
              className="link-off-canvas text-black"
              to="/"
              onClick={handleCloseMenu}
            >
              home
            </NavLink>
            <NavLink
              className="link-off-canvas text-black"
              to="/shop"
              onClick={handleCloseMenu}
            >
              shop
            </NavLink>
            <NavLink
              className="link-off-canvas text-black"
              to="/about-this-project"
              onClick={handleCloseMenu}
            >
              about this project
            </NavLink>

            <NavLink>
              <div className="link-off-canvas off-dropdown">
                <p>
                  categories <i className="bi bi-caret-down-fill"></i>
                </p>

                <div className="content">
                  {categories.map((category) => (
                    <a href={`/category/${category.id}`} key={category.id}>
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </NavLink>
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
