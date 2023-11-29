import React from "react";
import { useState } from "react";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);
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
        <i className="bi bi-search lupita"></i>
        <div onClick={() => navigate("/")} className="apparat-logo">
          <img
            className="img-fluid"
            src="/src/assets/logo/apparatNavbar.png"
            alt=""
          />
        </div>
        <div className="shop-profile">
          <i onClick={(event) => handleShow(event)} className="bi bi-cart3"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
      <div className="navigation">
        <p onClick={() => navigate("/")}>home</p>
        <p onClick={() => navigate("/shop")}>shop</p>
        
          <p
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            // onMouseEnter={handleShowDropdown}
            // onMouseLeave={handleHideDropdown}
            onClick={() => navigate("/categories")}
          >
            categories
          </p>
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
       
        <p onClick={() => navigate("/about-us")}>about us</p>
      </div>
      <OffCanvasShoppingCart show={show} handleClose={() => setShow(false)} />
    </>
  );
}

export default Navbar;
