import React, { useEffect } from "react";
import { useState } from "react";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffCanvasSignIn from "./OffCanvasSignIn";
import "./css/App.css";
import OffCanvasNavbarMenu from "./OffCanvasNavbarMenu";
import { toggleShowModal } from "../redux/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function NavbarApparat() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.page.showCart);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowCart = (event) => dispatch(toggleShowModal());
  const handleShowSignIn = (event) => setShowSignIn(true);
  const handleCloseCart = (event) => dispatch(toggleShowModal());
  const handleCloseSignIn = (event) => setShowSignIn(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu(!showMenu);
  const handleCloseMenu = () => setShowMenu(false);
  const cartQuantity = useSelector((state) => state.cart.length);
  const user = useSelector((state) => state.user.firstname);
  const navigate = useNavigate();
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
      <div className="parent-navbar-container">
        <Navbar expand="lg" className="myNavbar navbar higher-z-index">
          <Container>
            <Navbar.Brand className="" href="/">
              <div onClick={() => navigate("/")} className="apparat-logo">
                <img
                  className=" m-0"
                  src="/src/assets/logo/ApparatBlack.png"
                  alt="Apparat logo"
                />
              </div>
            </Navbar.Brand>

            <i
              onClick={(event) => dispatch(toggleShowCart())}
              className="bi bi-cart3 carrito-icon-responsive"
            ></i>

            <Nav className="me-auto d-sm-none d-lg-flex navbar-custom">
              <NavLink className="nav-link custom-item" to="/">
                home
              </NavLink>

              <NavLink className="nav-link custom-item" to="/shop">
                shop
              </NavLink>
              <NavLink
                className="nav-link custom-item"
                to="/about-this-project"
              >
                about this project
              </NavLink>

              <NavDropdown
                className="custom-item"
                title="categories"
                id="basic-nav-dropdown"
              >
                {categories.map((category) => (
                  <NavLink
                    key={category.id}
                    className="dropdown-item custom-item"
                    to={`/category/${category.id}`}
                  >
                    {category.name}
                  </NavLink>
                ))}
              </NavDropdown>
            </Nav>

            <div className="shop-profile d-sm-none d-lg-flex">
              <i className="bi bi-search lupita"></i>
              <i
                onClick={(event) => handleShowCart(event)}
                className="bi bi-cart3 carrito-icon"
              ></i>{" "}
              <span style={{ marginLeft: "5px" }}>{cartQuantity}</span>
              <i
                onClick={(event) => handleShowSignIn(event)}
                className="bi bi-person profile-icon"
              ></i>
              {user && (
                <span
                  style={{ marginLeft: "5px", fontSize: "15px" }}
                  className="user-firstname"
                >
                  {user}
                </span>
              )}
            </div>

            <i
              onClick={handleToggleMenu}
              className="bi bi-list mobile-menu-icon menu-icon d-lg-none"
            ></i>
            <OffCanvasNavbarMenu
              showMenu={showMenu}
              handleCloseMenu={() => setShowMenu(false)}
              handleShowSignIn={() => setShowSignIn(true)}
              showCart={showCart}
              handleCloseCart={() => setShowCart(false)}
              showSignIn={showSignIn}
              handleCloseSignIn={() => setShowSignIn(false)}
            />

            <OffCanvasShoppingCart
              showCart={showCart}
              handleCloseCart={() => dispatch(toggleShowModal())}
            />
            <OffCanvasSignIn
              showSignIn={showSignIn}
              handleCloseSignIn={() => setShowSignIn(false)}
            />
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarApparat;
