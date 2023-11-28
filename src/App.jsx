import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<Product/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}


export default App;
