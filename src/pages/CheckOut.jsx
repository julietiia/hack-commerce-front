import React, { useEffect, useState } from "react";
import soapdispenser from "../assets/img/soapdispenser.png";
import tables from "../assets/img/tables.png";
import chair from "../assets/img/chair.png";
import HighlightProductsCheckout from "../components/HighlightProductsCheckout";
import Breadcrumb from "../components/CheckoutBreadcrumb";
import "../components/css/checkout.css";
import CheckoutLoginForm from "../components/CheckoutLogInForm";
import CompleteTheLookWith from "../components/CompleteTheLookWith"
import botonMercadoPago from "../assets/buttons/botonMercadoPago.png";
import visaNet from "../assets/buttons/visaNet.png";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";

function CheckOut() {
  const userToken = useSelector((state) => state.user);
  const cartProducts = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = () => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      sendOrder();
      setIsLoading(false);
    }, 3000);

    const button = document.querySelector(".checkout-button");
    button.disabled = true;

    const cleanupTimer = (timer) => {
      useEffect(() => () => clearTimeout(timer), []);
    };
  };

  const sendOrder = async () => {
    await axios({
      method: "post",
      url: `${import.meta.env.VITE_PORT_URL}/orders`,
      data: cartProducts,
      headers: {
        Authorization: `Bearer ${userToken.token}`,
      },
    });
    dispatch(clearCart());
    navigate("/created-order");
  };

  return (
    <>
      <div className="container">
        <div className="">
          <p className="checkout-warning mt-5">
            These articles are not reserved until they have been completed.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          {userToken.length !== 0 ? (
            <div className="col-lg-6 col-md-12">
              <div className="checkout-user-data">
                <h3 className="">Welcome, {userToken.firstname}</h3>

                <p>{userToken.email}</p>
                <p>{userToken.address}</p>
              </div>
            </div>
          ) : (
            <div className="col-lg-6 col-md-12">
              <div className="checkout-payment-container">
                <h3 className="ps-2">Already have an account? login</h3>
                <div className="form-container ps-2 pe-4 py-2">
                  <CheckoutLoginForm />
                </div>
              </div>
            </div>
          )}

          <div className="col-lg-6 col-md-12">
            <div className="shopping-list-container">
              <h3 className="ps-2">Your shopping list</h3>
              <Breadcrumb />

              <div className="shopping-list">
                {cartProducts.map((cart) => (
                  <div className="checkout-product" key={cart.product.id}>
                    <div className="d-flex">
                      <div className="position-relative">
                        <img
                          className="checkout-product-image"
                          src={`${import.meta.env.VITE_IMAGES_URL}/${
                            cart.product.image[1]
                          }`}
                          alt={cart.product.name}
                        />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                          {cart.quantity}
                        </span>
                      </div>

                      <div className="checkout-product-details ps-2">
                        <p className="checkout-product-name">
                          {cart.product.name}
                        </p>
                        <p className="checkout-product-ref">
                          Ref.{cart.product.id}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <p className="checkout-product-price">
                        {cart.product.price}
                      </p>
                    </div>
                  </div>
                ))}

                <hr />

                <div className="total ps-2 pe-4">
                  <p className="checkout-total">Total</p>
                  <p className="checkout-total">
                    USD{" "}
                    {cartProducts.reduce(
                      (acc, { product: { price }, quantity }) =>
                        acc + (price ?? 0) * quantity,
                      0
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClick}
                className="checkout-button rounded btn btn-dark text-select"
              >
                Continue to shipping {isLoading && <Spinner />}
              </button>
              <div className="pay-buttons">
                <img src={botonMercadoPago} className="mercadopago" />
                <img src={visaNet} className="ebrou" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompleteTheLookWith/>
    </>
  );
}

export default CheckOut;
