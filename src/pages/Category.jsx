import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/Category.css";
import { useNavigate, useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";

function Category() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/category/${id}`,
      });
      setCategory(response.data.category);
      setProducts(response.data.products);
      console.log(response.data);
    };
    getCategory();
  }, [id]);
  // se rompe

  return (
    <>
      {/* <p>{category.name}</p> */}
      <div className="header">
        <h1 className="category-title">chairs</h1>
        <img
          src="../src/assets/img/banner-category-sillas.jpg"
          alt="image1"
          className="img-banner-category-chairs"
        />
      </div>
      {/* <div className="container">
        <div className="row mb-5 mt-5">
          {products.map((product)=>(
          <div key={product.id} className="col-6 col-lg-3">
            
            <div className="image-container">
           
            
               <img
                onClick={() => navigate(`/product/${product.id}`)}
                src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image[1]}`}
                alt={product.name}
                className="img-chair img1"
              />
               <img
                src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image[0]}`}
                alt={product.name}
                className="img-chair top-img"
              />  
              <small>{product.name}</small>
              <small>{product.price}USD</small>
            </div>
          </div>
          ))}
          
        </div>
      </div> */}
    </>
  );
}

export default Category;
