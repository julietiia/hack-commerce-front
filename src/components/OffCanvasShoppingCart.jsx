import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./css/ShoppingCart.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function OffCanvasShoppingCart({
  showCart,
  handleCloseCart,
  handleShowCart,
  ...props
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  // const [productToRemove, setProductToRemove] = useState();
  const [quantity, setQuantity] = useState();
  const [productQuantity, setProductQuantity] = useState(
    cartProducts.reduce((quantity, cart) => {
      quantity[cart.product.id] = cart.quantity;
      return quantity;
    }, {})
  );
  // console.log(cartProducts)

  return (
    <>
      <Offcanvas
        show={showCart}
        onHide={handleCloseCart}
        {...props}
        placement={"end"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="row">
              {cartProducts.map((cart) => (
                <div key={cart.product.id} className="product-cart">
                  <div className="col-4">
                    <div className="cart-product-container">
                      <img
                        className="cart-product-pic"
                        src={`${import.meta.env.VITE_IMAGES_URL}products/${
                          cart.product.image[1]
                        }`}
                        alt={cart.product.name}
                      />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        {cart.quantity}
                      </span>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="product-info-cart">
                      <p className="cart-product-name">{cart.product.name}</p>
                      <div className="quantity">
                        <button
                          className="btn btn-outline-dark"
                          onClick={() =>
                            dispatch(decrementQuantity(cart.product.id))
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() =>
                            dispatch(incrementQuantity(cart.product.id))
                          }
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 price-n-remove">
                    <p className="cart-unit-price">USD {cart.product.price}</p>
                    <div className="remove-from-cart">
                      <i
                        onClick={() =>
                          dispatch(removeFromCart(cart.product.id))
                        }
                        className="bi bi-trash3 btn btn-outline-dark"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="row">
              <button
                className="col-12 mt-3 btn btn-dark check-out-button rounded"
                onClick={() => navigate("/checkout")}
              >
                Check out
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasShoppingCart;
