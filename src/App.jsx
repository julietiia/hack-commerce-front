import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <>
            {/* <Navbar />
            <Home />
            <Footer /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </>
    );
}

export default App;
