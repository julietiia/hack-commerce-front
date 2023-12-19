import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/css/Home.css";
import Categories from "../components/Categories";
import HomeCarousel from "../components/Carousel";
import GetInspiredBy from "../components/GetInspiredBy";
import Subscription from "../components/Subscription";
import ScrollUpButton from "../components/ScrollUpButton";
import FloatingAboutUs from "../components/FloatingAboutUs";

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
      <HomeCarousel />
      <ScrollUpButton />
      <Categories />
      <GetInspiredBy />
      <FloatingAboutUs />
      <Subscription />
    </>
  );
}

export default Home;
