import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/css/HightlightProducts.css";
import { useNavigate, Link } from "react-router-dom";


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
      <div className="container row-hightlight-products">
        <div className="row   mb-5 ">
          <h2 className="d-flex justify-content-center mt-3">
            get inspired with apparat{" "}
          </h2>
        </div>
        <div className="row">
          {products.map((product) => (
            <div
              className="col-6 col-sm-6 col-md-3 mb-3 d-flex justify-content-center align-self-center flex-wrap gap-2"
              key={product.id}
            >
              <div className="hightlight-product">
                <Link to="/product/1">
                  <img
                    className="img-hightlight-product mb-3"
                    src={`${import.meta.env.VITE_IMAGES_URL}products/${product.image[0]}`}
                    alt={product.name}
                  />
                </Link>
                <small>{product.name}</small>
                <small className="fw-light">{product.price}USD</small>
                {console.log("Image URL:", `${import.meta.env.VITE_IMAGES_URL}products/${product.image[0]}`)}

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HightlightProducts;
