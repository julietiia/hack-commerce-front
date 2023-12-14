import React from "react";
import { useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUp, ArrowDown, Plus, Dash } from "react-bootstrap-icons";
import ApparatWhite from "../assets/logo/ApparatWhite.png"

function Footer() {
  const navigate = useNavigate();
  const handleShowSignIn = (event) => setShowSignIn(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const handleCloseSignIn = (event) => setShowSignIn(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  return (
    <footer>
      <div className="bg-dark text-white pt-4">
        <div
          onClick={() => navigate("/")}
          className="footer-logo-container pt-1"
        >
          <img
            id="footerLogo"
            src={ApparatWhite}
            alt="apparat logo"
          />
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3 text-center d-none d-md-block footer-block">
              <ul>
                <h4 onClick={() => navigate("/shop")}>shop</h4>
                <li onClick={() => navigate("/category/2")}>sofas</li>
                <li onClick={() => navigate("/category/1")}>chairs</li>
                <li onClick={() => navigate("/category/4")}>tables</li>
                <li onClick={() => navigate("/category/3")}>lighting</li>
                <li onClick={() => navigate("/category/5")}>
                  storage & <br /> organization
                </li>
                <li onClick={() => navigate("/category/6")}>deco</li>
              </ul>
            </div>
            <div className="d-block d-md-none mb-2">
              <h4
                className="text-center"
                role="button"
                onClick={() => setShopOpen(!shopOpen)}
                aria-controls="shop"
                aria-expanded={shopOpen}
              >
                shop {shopOpen ? <Dash /> : <Plus />}
              </h4>
              <Collapse in={shopOpen}>
                <div id="shopCollapse">
                  <Card>
                  
                    <Card.Body className="blackCard text-white rounded footer-block">
                      <ul className="">
                        <li onClick={() => navigate("/category/2")}>
                          sofas
                        </li>
                        <li onClick={() => navigate("/category/1")}>
                          chairs
                        </li>
                        <li onClick={() => navigate("/category/4")}>
                          tables
                        </li>
                        <li onClick={() => navigate("/category/3")}>
                          lighting
                        </li>
                        <li onClick={() => navigate("/category/5")}>
                          storage & organization
                        </li>
                        <li onClick={() => navigate("/category/6")}>deco</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </div>
            <div className="col-md-3 text-center d-none d-md-block footer-block">
              <ul>
                <h4>service</h4>
                <li>contact</li>
                <li>customer review</li>
                <li onClick={() => navigate("/about-this-project")}>
                  about this project
                </li>
                <li>terms & conditions</li>
              </ul>
            </div>
            <div className="d-block d-md-none mb-2">
              <h4
                className="text-center"
                role="button"
                onClick={() => setServiceOpen(!serviceOpen)}
                aria-controls="service"
                aria-expanded={serviceOpen}
              >
                service {serviceOpen ? <Dash /> : <Plus />}
              </h4>
              <Collapse in={serviceOpen}>
                <div id="serviceCollapse">
                  <Card>
                    <Card.Body className="blackCard text-white rounded footer-block">
                      <ul className="">
                        <li>contact</li>
                        <li>customer review</li>
                        <li onClick={() => navigate("/about-this-project")}>
                          about this project
                        </li>
                        <li>terms & conditions</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </div>
            <div className="col-md-3 text-center d-none d-md-block footer-block">
              <ul>
                <h4>user info</h4>
                <li onClick={() => navigate("/sign-up")}>create account</li>
                <li onClick={() => navigate("/sign-up")}>sign in</li>
                <li>privacy policy</li>
              </ul>
            </div>
            <div className=" d-block d-md-none mb-2">
              <h4
                className="text-center"
                role="button"
                onClick={() => setUserInfoOpen(!userInfoOpen)}
                aria-controls="userInfo"
                aria-expanded={userInfoOpen}
              >
                user info {userInfoOpen ? <Dash /> : <Plus />}
              </h4>
              <Collapse in={userInfoOpen}>
                <div id="userInfoCollapse">
                  <Card>
                    <Card.Body className="blackCard text-white rounded footer-block">
                      <ul className="">
                        <li onClick={() => navigate("/sign-up")}>
                          create account
                        </li>
                        <li onClick={(event) => handleShowSignIn(event)}>
                          sign in
                        </li>
                        <li>privacy policy</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </div>
            <div className="col-sm-12 col-md-3 text-center footer-social">
              <h4>keep in touch</h4>
              <a
                className="mx-2"
                href="https://www.facebook.com/"
                target="blank"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                className="mx-2"
                href="https://twitter.com/home"
                target="blank"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                className="mx-2"
                href="https://www.instagram.com/"
                target="blank"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a className="mx-2" href="https://pinterest.com/" target="blank">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="copyright-footer text-center py-4">
            © 2023 Apparat inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
