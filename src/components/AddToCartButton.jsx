import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleShowModal } from "../redux/pageSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const AddToCartButton = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.page.showCart)
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    dispatch(toggleShowModal()); 
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

