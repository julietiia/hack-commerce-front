import React from "react";

function Navbar() {
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
        <p>home</p>
        <p>shop</p>
        <p>categories</p>
        <p>about us</p>
      </div>
    </>
  );
}

export default Navbar;
