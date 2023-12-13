import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../redux/productSlice";
import "../components/css/Shop.css";
import AddToCartButton from "../components/AddToCartButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import Subscription from "../components/Subscription";
import ScrollUpButton from "../components/ScrollUpButton";

function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/products`,
      });
      console.log(response.data.products)
      setAllProducts(response.data.products);
    };
    getAllProducts();
  }, []);

  return (
    <>

      {!allProducts.length ? (
        <Spinner />
      ) : (
        <div className="container mb-5">
          <div className="row mt-5">
            <div className="col">
              <h3 className="m-0">All you need in one place</h3>
            </div>
          </div>
          <div className="row">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="col-sm-12 col-md-6 col-lg-3 mt-5"
              >
                <img
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="img-shop-product"
                  src={`${import.meta.env.VITE_IMAGES_URL}/${
                    product.image[0]
                  }`}
                  alt={product.name}
                />
                <div className="shop-product-info d-flex flex-column">
                  <p
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="mb-0 mt-2"
                  >
                    {product.name}
                  </p>
                  <p id="price" className="mb-2 fw-light">
                    {product.price} USD
                  </p>

                  <AddToCartButton product={product} quantity={quantity} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Subscription />
      <ScrollUpButton />
    </>
  );
}

export default Shop;
