import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="navbar mb-4">
        <i className="bi bi-search lupita"></i>
        <div className="apparat-logo">
          <img
            className="img-fluid"
            src="/src/assets/apparat-logo-navbar.png"
            alt=""
          />
        </div>
        <div className="shop-profile">
          <i className="bi bi-cart3" ></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
      <div className="navigation">
        <p onClick={() => navigate("/")}>home</p>
        <p onClick={() => navigate("/shop")}>shop</p>
        <p onClick={() => navigate("/categories")}>categories</p>
        <p onClick={() => navigate("/about-us")}>about us</p>
      </div>
    </>
  );
}

export default Navbar;
