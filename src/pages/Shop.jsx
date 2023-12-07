import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../redux/productSlice";
import HightlightProducts from "../components/HightlightProducts";
import AddToCartButton from "../components/AddToCartButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function Shop() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/products`,
      });

      dispatch(setAllProducts(response.data.products));
    };
    getAllProducts();
  }, []);

  return (
    <>
    <div className="mt-5">
    <HightlightProducts />
    </div>
      
      {!allProducts.length ? (
        <Spinner />
      ) : (
        <div className="container mt-2">
          <div className="row">
            {allProducts.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mt-5">
                <img
                 onClick={() => navigate(`/product/${product.id}`)}
                  className="img-hightlight-product mb-3"
                  src={`${import.meta.env.VITE_IMAGES_URL}products/${
                    product.image[0]
                  }`}
                  alt={product.name}
                />
                <div className="shop-product-info d-flex flex-column">
                  <p onClick={() => navigate(`/product/${product.id}`)} className="m-0">{product.name}</p>
                  <p id="price" className="mb-2 fw-light">
                    {product.price} USD
                  </p>

                  <AddToCartButton product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
