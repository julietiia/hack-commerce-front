import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./css/CompleteTheLookWith.css";
import { useNavigate, Link } from "react-router-dom";

function CompleteTheLookWith() {
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

  const handleLeftClick = () => {
    const horizontalScrollElement =
      document.querySelector(".horizontal-scroll");

    horizontalScrollElement.scrollBy(-200, 0);
  };

  const handleRightClick = () => {
    const horizontalScrollElement =
      document.querySelector(".horizontal-scroll");

    horizontalScrollElement.scrollBy(200, 0);
  };

  return (
    <>
    
      <div className="container-fluid">
        <div className="container">
        <div className="row my-3">
          <div className="col">
            <div className="complement-navigation">
              <h2 className="">Complete the look with </h2>
              <div className="navigation d-none d-lg-block">
                <i className="bi bi-arrow-left" onClick={handleLeftClick}></i>
                <i className="bi bi-arrow-right" onClick={handleRightClick}></i>
              </div>
            </div>
          </div>
        </div>
        </div>
        

        <div className="row horizontal-scroll">
          {products.map((product) => (
            <div className="complement-product" key={product.id}>
              <div className="product-container">
                <Link to={`/product/${product.id}`}>
                  <img
                    className="complement-image mb-3"
                    src={`${import.meta.env.VITE_IMAGES_URL}/${
                      product.image[0]
                    }`}
                    alt={product.name}
                  />
                </Link>
                <p className="product-name">{product.name}</p>
                <p className="fw-light">{product.price} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default CompleteTheLookWith;
