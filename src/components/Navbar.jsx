import React from "react";
import { useState } from "react";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useNavigate, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffCanvasSignIn from "./OffCanvasSignIn";
import "./css/App.css";
import OffCanvasNavbarMenu from "./OffCanvasNavbarMenu";

function NavbarApparat() {
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowCart = (event) => setShowCart(true);
  const handleShowSignIn = (event) => setShowSignIn(true);
  const handleCloseCart = (event) => setShowCart(false);
  const handleCloseSignIn = (event) => setShowSignIn(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu(!showMenu);
  const handleCloseMenu = () => setShowMenu(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="parent-navbar-container">
        <Navbar expand="lg" className="myNavbar navbar higher-z-index">
          <Container>
            <Navbar.Brand className="" href="/">
              <div onClick={() => navigate("/")} className="apparat-logo">
                <img
                  className="apparat-logo-navbar m-0"
                  src="/src/assets/logo/apparat+black-navbar-logo.png"
                  alt="Apparat logo"
                />
              </div>
            </Navbar.Brand>
           
            <i
              onClick={(event) => handleShowCart(event)}
              className="bi bi-cart3 carrito-icon-responsive "
            ></i>
            {/* <Navbar.Collapse id="basic-navbar-nav">  */}
              <Nav className="me-auto d-sm-none d-lg-flex navbar-custom">
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
                  <NavLink className="dropdown-item" to="/category/1">
                    chairs
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/2">
                    sofas
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/4">
                    tables
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/3">
                    lightning
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/5">
                    storage&organization
                  </NavLink>
                  <NavLink className="dropdown-item" to="/category/6">
                    deco
                  </NavLink>
                </NavDropdown>
              </Nav>
              <div className="shop-profile d-sm-none d-lg-flex">
                <i className="bi bi-search lupita"></i>
                <i
                  onClick={(event) => handleShowCart(event)}
                  className="bi bi-cart3 carrito-icon"
                ></i>
                <i
                  onClick={(event) => handleShowSignIn(event)}
                  className="bi bi-person-circle profile-icon"
                ></i>
              </div>
            {/* </Navbar.Collapse> */}
            <i
              onClick={handleToggleMenu}
              className="bi bi-list mobile-menu-icon d-lg-none"
            ></i>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
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
              handleCloseCart={() => setShowCart(false)}
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
