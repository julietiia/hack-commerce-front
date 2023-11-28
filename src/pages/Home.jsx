import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HightlightProducts from "../components/HightlightProducts";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/`,
      });

      setProducts(response.data.products);
    };
    getProducts();
  }, []);

  return (
    <>
   
      {/* <ul className="mt-5">
        {products.map((product) => (
         <li key={product.id}> {product.name} </li>
        ))}
      </ul> */}
      <section className="carousel">
        <img src="/src/assets/banner.png" alt="banner" />
      </section>
      <Categories />
      <HightlightProducts/>
    </>
  );
}

export default Home;
