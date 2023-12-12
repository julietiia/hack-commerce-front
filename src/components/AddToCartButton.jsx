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
    dispatch(addToCart({ product, quantity: Number(quantity) }));

    toast.dark(
      <div className="custom-toast">
        <img
          src={`${import.meta.env.VITE_IMAGES_URL}/${product.image[0]}`}
          alt={product.name}
          className="toast-image toast-img"
        />
        <div className="toast-content">
          <p className="mt-3">
            {quantity} {product.name} added to the cart!
          </p>
        </div>
      </div>,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
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
        className="addtocart-button rounded btn btn-dark"
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
