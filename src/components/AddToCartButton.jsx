import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const AddToCartButton = ({onClick}) => {
  // const dispatch = useDispatch();

  // const handleAddToCart = () => {
  //   dispatch(addToCart({ product, quantity }));
  
  return (
    <button
      onClick={onClick}
      className="addtocart-button rounded btn btn-dark text-select"
    >
      Add to cart
    </button>
  );
};


export default AddToCartButton;
