import React, { useEffect, useState } from "react";
import ApparatBlack from "../assets/logo/ApparatBlack.png";
import "../components/css/Navbar.css";
import axios from "axios";
import OffCanvasShoppingCart from "./OffCanvasShoppingCart";
import OffCanvasSignIn from "./OffCanvasSignIn";
import { useNavigate } from "react-router-dom";
import { toggleShowModal } from "../redux/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import OffCanvasNavbarMenu from "./OffCanvasNavbarMenu";

function NavbarDos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.firstname);
  const showCart = useSelector((state) => state.page.showCart);
  const cartQuantity = useSelector((state) => state.cart.length);
  const [categories, setCategories] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleShowCart = (event) => dispatch(toggleShowModal());
  const handleShowSignIn = (event) => setShowSignIn(true);
  const handleToggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/categories`,
      });
      setCategories(response.data.categories);
    };

    getCategories();
  }, []);

  return (
    <div className="nav-container">
      
        <div className="navbar-body">
          <div className="brand-pages-body">
            <img src={ApparatBlack} alt="" className="nav-logo" onClick={() => navigate("/")} />
            <div className="pages">
              <p onClick={() => navigate("/")}>home</p>
              <p onClick={() => navigate("/shop")}>shop</p>
              <p onClick={() => navigate("/about-this-project")}>
                about this project
              </p>
              <div className="dropdown">
                <p>
                  categories <i className="bi bi-caret-down-fill"></i>
                </p>

                <div className="content">
                  {categories.map((category) => (
                    <a href={`/category/${category.id}`} key={category.id}>
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="user-body">
            <div className="icon-nav-container">
              <i className="bi bi-search nav-icon"></i>
            </div>
            <div className="icon-nav-container">
              <i
                className="bi bi-cart nav-icon"
                onClick={(event) => handleShowCart(event)}
              ></i>
            {cartQuantity > 0 && (
              <span className="position-absolute top-50 start-100 translate-middle-y badge rounded-pill">
                {cartQuantity}
              </span>
            )}
            </div>
            <div className="icon-nav-container">
              <i
                className="bi bi-person nav-icon-profile"
                onClick={(event) => handleShowSignIn(event)}
              ></i>
              {user && (
                <span className="position-absolute top-50 start-100 translate-middle-y badge rounded-pill ">
                  {user}
                </span>
              )}
            </div>

            <OffCanvasNavbarMenu
              showMenu={showMenu}
              handleCloseMenu={() => setShowMenu(false)}
              handleShowSignIn={() => setShowSignIn(true)}
              showCart={showCart}
              handleCloseCart={() => setShowCart(false)}
              showSignIn={showSignIn}
              handleCloseSignIn={() => setShowSignIn(false)}
              categories= {categories}
            />

            <OffCanvasShoppingCart
              showCart={showCart}
              handleCloseCart={() => dispatch(toggleShowModal())}
            />

            <OffCanvasSignIn
              showSignIn={showSignIn}
              handleCloseSignIn={() => setShowSignIn(false)}
            />
          </div>

          
        </div>
        <div className="menu-cart-body">
            <div className="cart-menu">
              <i
                className="bi bi-cart"
                onClick={(event) => handleShowCart(event)}
              ></i>
              {cartQuantity > 0 && (
              <span className="position-absolute top-50 start-100 translate-middle-y badge rounded-pill">
                {cartQuantity}
              </span>
              )}
            </div>
            <div className="burger-menu" onClick={handleToggleMenu}>
              <i className="bi bi-list"></i>
              {cartQuantity > 0 && (
              <span className="position-absolute top-50 start-0 translate-middle badge rounded-pill">
                {cartQuantity}
              </span>
              )}
            </div>
          </div>
      
    </div>
  );
}

export default NavbarDos;
