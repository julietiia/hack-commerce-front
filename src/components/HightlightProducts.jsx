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
        url: `${import.meta.env.VITE_PORT_URL}/products`,
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
      <div className="container row-hightlight-products my-3">
        <div className="row my-3 ">
          <h2 className="d-flex justify-content-center mt-3">
            get inspired by apparat
          </h2>
        </div>
        <div className="row px-3">
          {products.map((product) => (
            <div
              className="col-6 col-sm-6 col-md-3 mb-3 d-flex justify-content-center align-self-center flex-wrap gap-2"
              key={product.id}
            >
              <div className="hightlight-product">
                <Link to={`/product/${product.id}`}>
                  <img
                    className="img-hightlight-product mb-3"
                    src={`${import.meta.env.VITE_IMAGES_URL}products/${
                      product.image[0]
                    }`}
                    alt={product.name}
                  />
                </Link>
                <p className="hl-product-name">{product.name}</p>
                <p className="hl-product-price fw-light">{product.price} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HightlightProducts;
