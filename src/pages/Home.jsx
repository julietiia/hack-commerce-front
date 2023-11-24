import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/`,
      });
      console.log(response.data.products)
      setProducts(response.data.products);
    };
    getProducts();
  }, []);

  return (
    <>
      <ul>
        {products.map((product) => {
          <li> {product.name} </li>;
        })}
      </ul>
    </>
  );
}

export default Home;
