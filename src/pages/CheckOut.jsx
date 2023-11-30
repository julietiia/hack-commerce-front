import React from "react";
import orangelamp from "../assets/img/orangelamp.webp";
import plumongradiente from "../assets/img/plumongradiente.webp";
import chair from "../assets/img/chair.png";
import HighlightProductsCheckout from "../components/HighlightProductsCheckout";
import Breadcrumb from "../components/CheckoutBreadcrumb";
import "../components/css/checkout.css";
import CheckoutLoginForm from "../components/CheckoutLogInForm";

function CheckOut() {
  return (
    <>
      <div className="container">
        <div className="mt-3">
          <p className="checkout-warning">
            These articles are not reserved until they have been completed.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-6 col-md-12">
            <div className="shopping-list-container">
              <h3 className="ps-2">your shopping list</h3>
              <Breadcrumb />

              <div className="shopping-list">
                <div className="checkout-product ps-2 pe-4 py-2">
                  <div className="d-flex">
                    <img
                      className="checkout-product-image"
                      src={orangelamp}
                      alt=""
                    />
                    <div className="checkout-product-details ps-3">
                      <p className="checkout-product-name">
                        Ansel Glass Table Lamp
                      </p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <div className="checkout-product ps-2 pe-4 py-2">
                  <div className="d-flex">
                    <img
                      className="checkout-product-image"
                      src={plumongradiente}
                      alt=""
                    />
                    <div className="checkout-product-details ps-3">
                      <p className="checkout-product-name">
                        Metallic Nylon Comforter
                      </p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <div className="checkout-product ps-2 pe-4 py-2">
                  <div className="d-flex">
                    <img
                      className="checkout-product-image"
                      src={chair}
                      alt=""
                    />
                    <div className="checkout-product-details ps-3">
                      <p className="checkout-product-name">Bubble Chair</p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <div className="checkout-product ps-2 pe-4 py-2">
                  <div className="d-flex">
                    <img
                      className="checkout-product-image"
                      src={orangelamp}
                      alt=""
                    />
                    <div className="checkout-product-details ps-3">
                      <p className="checkout-product-name">
                        Ansel Glass Table Lamp
                      </p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <div className="checkout-product ps-2 pe-4 py-2">
                  <div className="d-flex">
                    <img
                      className="checkout-product-image"
                      src={plumongradiente}
                      alt=""
                    />
                    <div className="checkout-product-details ps-3">
                      <p className="checkout-product-name">
                        Metallic Nylon Comforter
                      </p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <div className="checkout-product ps-2 pe-4 py-2">
                  <div className="d-flex">
                    <img
                      className="checkout-product-image"
                      src={chair}
                      alt=""
                    />
                    <div className="checkout-product-details ps-3">
                      <p className="checkout-product-name">Bubble Chair</p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <hr />
                <div className="subtotal ps-2 pe-4">
                  <p className="checkout-subtotal">Subtotal</p>
                  <p className="checkout-subtotal">999USD</p>
                </div>
                <div className="total ps-2 pe-4">
                  <p className="checkout-total">Total</p>
                  <p className="checkout-total">999USD</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="checkout-payment-container">
              <h3 className="ps-2">login</h3>
              <div className="form-container ps-2 pe-4 py-2">
                <CheckoutLoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-">
        <div className="row">
          <HighlightProductsCheckout />
        </div>
      </div>
    </>
  );
}

export default CheckOut;
