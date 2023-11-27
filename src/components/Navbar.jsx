import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar mb-4">
        <i className="bi bi-search"></i>
        <div className="apparat-logo">
          <img
            className="img-fluid"
            src="/src/assets/apparat-logo-navbar.png"
            alt="apparat-logo"
          />
        </div>
        <div className="shop-profile">
          <i className="bi bi-cart3"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
