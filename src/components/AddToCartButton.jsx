import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { toggleShowModal } from "../redux/pageSlice";
// import { useSelector } from "react-redux/es/hooks/useSelector";

const AddToCartButton = ({ product, quantity }) => {
  const dispatch = useDispatch();
  // const showCart = useSelector((state) => state.page.showCart)
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));

    

    toast.success(
      <div className="custom-toast">
        <img
          src={product.image[0]}
          alt={product.name}
          className="toast-image"
        />
        <div className="toast-content">
          <p>
            {quantity} {product.name} added to the cart!
          </p>
        </div>
      </div>,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
    // dispatch(toggleShowModal()); 
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="addtocart-button rounded btn btn-dark text-select"
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
