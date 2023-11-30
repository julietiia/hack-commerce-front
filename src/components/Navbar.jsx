import React from "react";
import { useState } from "react";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import OffCanvasSignIn from "./OffCanvasSignIn";

function Navbar() {
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
      <div className="d-flex myNavbar">
        <div onClick={() => navigate("/")} className="apparat-logo">
          <img
            className="ms-0 apparat-logo-navbar"
            src="src/assets/logo/apparat+black-navbar-logo.png"
            alt="logo"
          />
        </div>
        <div className="navigation mt-0 pt-2">
          <p onClick={() => navigate("/")}>home</p>
          <p onClick={() => navigate("/shop")}>shop</p>

          <NavDropdown
            title="categories"
            id="basic-nav-dropdown"
            className="custom-dropdown"
          >
            <NavDropdown.Item className="custom-item" href="#action/3.1">
              sofas
            </NavDropdown.Item>
            <NavDropdown.Item className="custom-item" href="/category/1">
              chairs
            </NavDropdown.Item>
            <NavDropdown.Item className="custom-item" href="#action/3.3">
              tables
            </NavDropdown.Item>

            <NavDropdown.Item className="custom-item" href="#action/3.4">
              lightning
            </NavDropdown.Item>
            <NavDropdown.Item className="custom-item" href="#action/3.4">
              storage & organization
            </NavDropdown.Item>
            <NavDropdown.Item className="custom-item" href="#action/3.4">
              deco
            </NavDropdown.Item>
          </NavDropdown>
          <p onClick={() => navigate("/about-this-project")}>
            about this project
          </p>
        </div>

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

        <OffCanvasShoppingCart showCart={showCart} handleCloseCart={() => setShowCart(false)} />
        <OffCanvasSignIn showSignIn={showSignIn} handleCloseSignIn={() => setShowSignIn(false)} />
       
      </div>
    </>
  );
}

export default Navbar;
