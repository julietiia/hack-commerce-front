import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const AddToCartButton = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="addtocart-button rounded btn btn-dark text-select"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;

