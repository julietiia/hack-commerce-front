import "./components/css/app.css";
import Home from "./pages/Home";
import NavbarApparat from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Admin from "./pages/Admin";
import "./components/css/Footer.css"
import Category from "./pages/Category.jsx";
import SignUp from "./pages/signUp.jsx";
import NotFound from "./components/NotFound.jsx";
import Shop from "./pages/Shop.jsx";

function App() {
  return (
    <>
      <NavbarApparat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/about-this-project" element={<AboutUs />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
