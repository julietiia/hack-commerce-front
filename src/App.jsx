import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import CheckOut from "./pages/CheckOut"

function App() {
    return (
        <>
            {/* <Navbar />
            <Home />
            <Footer /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/checkout" element={<CheckOut />} />
            </Routes>
        </>
    );
}


export default App;
