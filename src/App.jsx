import "./components/css/app.css";
import Home from "./pages/Home";
import NavbarApparat from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Admin from "./pages/Admin";
import "./components/css/Footer.css";
import "./components/css/App.css";
import Category from "./pages/Category.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotFound from "./pages/NotFound.jsx";
import Shop from "./pages/Shop.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Toastify from "./components/Toastify";


function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Toastify />
      <NavbarApparat />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/about-this-project" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
