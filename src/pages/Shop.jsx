import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../redux/productSlice";

function Shop() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/products`,
      });
      console.log(response.data.products);
      dispatch(setAllProducts(response.data.products));
    };
    getAllProducts();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {allProducts.map((product) => (
            <div className="col-4">
              
              <img
                className="img-hightlight-product mb-3"
                src={`${import.meta.env.VITE_IMAGES_URL}products/${
                  product.image[0]
                }`}
                alt={product.name}
              />{" "}
             <p>{product.name}</p>
             <p>{product.price}USD</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
