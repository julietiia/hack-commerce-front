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

function NavbarApparat() {
  const [showCart, setShowCart] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShowCart = (event) => setShowCart(true);
  const handleShowSignIn = (event) => setShowSignIn(true);
  const handleCloseCart = (event) => setShowCart(false);
  const handleCloseSignIn = (event) => setShowSignIn(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg p-5" className="myNavbar">
        <Container>
          <Navbar.Brand href="/">
            <div onClick={() => navigate("/")} className="apparat-logo">
              <img
                className="ms-0 apparat-logo-navbar"
                src="src/assets/logo/apparat+black-navbar-logo.png"
                alt="logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link custom-item" to="/">
                home
              </NavLink>
              <NavLink className="nav-link custom-item" to="#">
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

            <div className="shop-profile">
              <i className="bi bi-search lupita"></i>
              <i
                onClick={(event) => handleShowCart(event)}
                className="bi bi-cart3 carrito-icon"
              ></i>
              <i
              onClick={(event) => handleShowSignIn(event)} 
              className="bi bi-person-circle profile-icon"></i>
            </div>

           
          </Navbar.Collapse>
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
    </>
  );
}

export default NavbarApparat;
