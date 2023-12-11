import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/css/Home.css";
import Categories from "../components/Categories";
import HomeCarousel from "../components/Carousel"
import GetInspiredBy from "../components/GetInspiredBy";
import Subscription from "../components/Subscription";
import ScrollUpButton from "../components/ScrollUpButton";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/products`,
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
      <HomeCarousel />
      {/* <section className="carousel">
        <img src="/src/assets/banner.png" alt="banner" />
      </section> */}
      <ScrollUpButton/>
      <Categories />
      <div className="mt-5">
      <GetInspiredBy/>
      </div>
      
      <Subscription/>
    </>
  );
}

export default Home;

