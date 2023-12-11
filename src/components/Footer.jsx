import React from "react";
import { useNavigate } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./css/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUp, ArrowDown, Plus, Dash } from "react-bootstrap-icons";

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
        <div onClick={() => navigate("/")} className="footer-logo-container pt-1">
          <img
            id="footerLogo"
            src="/src/assets/logo/apparat+white-navbar-logo.png"
            alt="apparat logo"
          />
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3 text-center d-none d-md-block onlyDesktop">
              <ul>
                <h4 onClick={() => navigate("/shop")}>shop</h4>
                <li onClick={() => navigate("/category/sofas")}>sofas</li>
                <li onClick={() => navigate("/category/chairs")}>chairs</li>
                <li onClick={() => navigate("/category/tables")}>tables</li>
                <li onClick={() => navigate("/category/lighting")}>lighting</li>
                <li onClick={() => navigate("/category/storage")}>
                  storage & organisation
                </li>
                <li onClick={() => navigate("/category/deco")}>deco</li>
              </ul>
            </div>
            <div className="d-block d-md-none mb-2">
              <h4
                className=""
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
                    <Card.Body className="blackCard text-white">
                      <ul className="">
                        <li onClick={() => navigate("/category/sofas")}>
                          sofas
                        </li>
                        <li onClick={() => navigate("/category/chairs")}>
                          chairs
                        </li>
                        <li onClick={() => navigate("/category/tables")}>
                          tables
                        </li>
                        <li onClick={() => navigate("/category/lighting")}>
                          lighting
                        </li>
                        <li onClick={() => navigate("/category/storage")}>
                          storage & organization
                        </li>
                        <li onClick={() => navigate("/category/deco")}>deco</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </div>
            <div className="col-md-3 text-center d-none d-md-block onlyDesktop">
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
                className=""
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
                    <Card.Body className="blackCard text-white">
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
            <div className="col-md-3 text-center d-none d-md-block">
              <ul>
                <h4>user info</h4>
                <li onClick={() => navigate("/sign-up")}>create account</li>
                <li onClick={() => navigate("/sign-up")}>sign in</li>
                <li>pivacy policy</li>
              </ul>
            </div>
            <div className=" d-block d-md-none mb-2">
              <h4
                className=""
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
                    <Card.Body className="blackCard text-white">
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
            <div className="col-sm-12 col-md-3 text-center">
              <h4>let's keep in touch</h4>
              <a
                className="mx-4"
                href="https://www.facebook.com/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-facebook rs-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a
                className="mx-4"
                href="https://twitter.com/home"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-twitter-x rs-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </a>
              <a
                className="mx-4"
                href="https://www.instagram.com/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-instagram rs-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
              <a className="mx-4" href="https://pinterest.com/" target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-pinterest"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0" />
                </svg>
              </a>
            </div>
          </div>
          <div className="copyright-footer text-center pb-4">
            © 2023 apparat inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
