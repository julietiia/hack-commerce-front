import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function DiscoverSimilarDesigns({ productId }) {
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getSimilarProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${
          import.meta.env.VITE_PORT_URL
        }/similar-designs/category/${productId}`,
      });
      dispatch(setSimilarProducts(response.data.products));
    };
    getSimilarProducts();
  }, [productId, dispatch]);

  return (
    <div className="row g-3 mx-auto">
      {similarProducts.map((product) => (
        <div key={product.id} className="col-6 col-sm-6 col-md-3 ">
          <div className="similar-design-product">
            <Link to={`/product/${product.id}`} className="text-reset text-decoration-none">
            <img
              className="image-product-suggested mb-2"
              src={`${import.meta.env.VITE_IMAGES_URL}products/${
                product.image[0]
              }`}
              alt={product.name}
             
            />
            <p className="text-similar-design-name">{product.name}</p>
            <p className="text-similar-design-price fw-light">
              {product.price} USD
            </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscoverSimilarDesigns;
