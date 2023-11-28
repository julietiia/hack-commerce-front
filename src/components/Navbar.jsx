import React from "react";
import { useState } from "react";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = (event) => setShow(true);
  const handleClose = (event) => setShow(false);

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
          <i onClick={(event) => handleShow(event)} className="bi bi-cart3"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
      <div className="navigation">
        <p>home</p>
        <p>shop</p>
        <p>categories</p>
        <p>about us</p>
      </div>
      <OffCanvasShoppingCart show={show} handleClose={() => setShow(false)} />
    </>
  );
}

export default Navbar;
