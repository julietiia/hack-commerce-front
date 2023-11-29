import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/css/HightlightProducts.css";
import { useNavigate, Link } from "react-router-dom";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HightlightProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getHighlightProducts = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/`,
      });
      const highlightProducts = response.data.products.filter(
        (product) => product.highlight === true
      );

      setProducts(highlightProducts);
    };
    getHighlightProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row row-hightlight-products mb-5 ">
            <h2 className='d-flex justify-content-center mb-5 mt-3'>get inspire with apparat </h2>
               
        {products.map((product) => (
         <div className='col mb-3 d-flex justify-content-center align-self-center flex-wrap gap-2' key={product.id}>
        <div className="hightlight-product">
         <Link to="/product/1"><img className='img-hightlight-product mb-3' src={product.image} alt={product.name} /></Link> 
         <small>{product.name}</small>
         <small>{product.price} $</small>
       </div>
       </div>
         
        ))}
      
            
        </div>
      </div>
    </>
  );
}

export default HightlightProducts;
