import React from "react";
import "./footer.css";
import fbicon from "../assets/fbicon.svg";
import insticon from "../assets/insticon.svg";
import xicon from "../assets/xicon.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <img src="/src/assets/Final-HA.png" alt="apparat logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ul>
                shop
                <li>chair</li>
                <li>sofas</li>
                <li>tables</li>
                <li>lighting</li>
                <li>storage & organisation</li>
                <li>top rated</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                {" "}
                user info
                <li>create account</li>
                <li>sign in</li>
                <li>pivacy policy</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                service
                <li>contact</li>
                <li>customer review</li>
                <li>about us</li>
                <li>terms & conditions</li>
              </ul>
            </div>
            <div className="col-3">
              <h3>let's keep in touch</h3>
              <a href="https://www.facebook.com/">
                <img src={fbicon} alt="" />
              </a>
              <a href="https://twitter.com/home">
                <img src={xicon} alt="" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={insticon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
