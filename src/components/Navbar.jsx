import React from "react";
import { useState } from "react";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import apparatBlackNavbarLogo from "/src/assets/logo/apparatBlackNavbarLogo.svg";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleShow = (event) => setShow(true);
  const handleClose = (event) => setShow(false);
  const navigate = useNavigate();

  // const handleShowDropdown = () => {
  //   setShowDropdown(true);
  // };

  // const handleHideDropdown = () => {
  //   setShowDropdown(false);
  // };

  return (
    <>
      <div className="navbar mb-4">
        <div onClick={() => navigate("/")} className="apparat-logo">
          <img
            className=""
            src={apparatBlackNavbarLogo}
            alt="logo"
          />
        </div>
        <div className="shop-profile">
        <i className="bi bi-search lupita"></i>
          <i onClick={(event) => handleShow(event)} className="bi bi-cart3 carrito-icon"></i>
          <i className="bi bi-person-circle profile-icon"></i>
        </div>
      </div>
      <div className="navigation">
        <p onClick={() => navigate("/")}>home</p>
        <p onClick={() => navigate("/shop")}>shop</p>
        
        <NavDropdown title="categories" id="basic-nav-dropdown" className="custom-dropdown" >
              <NavDropdown.Item className="custom-item" href="#action/3.1">sofas</NavDropdown.Item>
              <NavDropdown.Item className="custom-item" href="/category/1">
                chairs
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-item" href="#action/3.3">tables</NavDropdown.Item>
        
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
          {/* <p
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onMouseEnter={handleShowDropdown}
            // onMouseLeave={handleHideDropdown}
            onClick={() => navigate("/categories")}
          >
            categories
          </p> */}
          {/* {showDropdown && (
            <div className="dropdown">
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  chairs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  sofas
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  lightning
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  storage&organization
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  deco
                </a>
              </li>
            </ul>
            </div>
          )} */}
       
        <p onClick={() => navigate("/about-this-project")}>about this project</p>
      </div>
      <OffCanvasShoppingCart show={show} handleClose={() => setShow(false)} />
    </>
  );
}

export default Navbar;
