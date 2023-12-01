import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/HighlightProductsCheckout.css";
import { useNavigate } from "react-router-dom";


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
      <div className="container d-flex justify-content-center">
        <div className="row row-hightlight-products mb-5 ">
          <h2 className="d-flex justify-content-center my-4">
            you may also like
          </h2>

          {products.map((product) => (
            <div
              className="col-mb-3 d-flex justify-content-center align-self-center flex-wrap gap-2"
              key={product.id}
            >
              <div
                className="hightlight-product"
                onClick={() => navigate("/product/1")}
              >
                <img
                  className="img-hightlight-product mb-3"
                  src={product.image}
                  alt={product.name}
                />
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HightlightProducts;