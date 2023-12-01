import React from "react";
import soapdispenser from "../assets/img/soapdispenser.png";
import tables from "../assets/img/tables.png";
import chair from "../assets/img/chair.png";
import HighlightProductsCheckout from "../components/HighlightProductsCheckout";
import Breadcrumb from "../components/CheckoutBreadcrumb";
import "../components/css/checkout.css";
import CheckoutLoginForm from "../components/CheckoutLogInForm";
import botonMercadoPago from "../assets/buttons/botonMercadoPago.png";
import visaNet from "../assets/buttons/visaNet.png";

function CheckOut() {
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
          <div className="col-lg-6 col-md-12">
            <div className="shopping-list-container">
              <h3 className="ps-2">your shopping list</h3>
              <Breadcrumb />

              <div className="shopping-list">
                <div className="checkout-product ">
                  <div className="d-flex">
                    <div className="position-relative">
                      <img
                        className="checkout-product-image"
                        src={soapdispenser}
                        alt=""
                      />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        1
                      </span>
                    </div>

                    <div className="checkout-product-details ps-2">
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

                <div className="checkout-product ">
                  <div className="d-flex">
                    <div className="position-relative">
                      <img
                        className="checkout-product-image"
                        src={tables}
                        alt=""
                      />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        1
                      </span>
                    </div>
                    <div className="checkout-product-details ps-2">
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

                <div className="checkout-product ">
                  <div className="d-flex">
                    <div className="position-relative">
                      <img
                        className="checkout-product-image"
                        src={chair}
                        alt=""
                      />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        1
                      </span>
                    </div>
                    <div className="checkout-product-details ps-2">
                      <p className="checkout-product-name">Bubble Chair</p>
                      <p className="checkout-product-ref">Ref.53494878</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="checkout-product-price">999USD</p>
                  </div>
                </div>

                <div className="checkout-product ">
                  <div className="d-flex">
                    <div className="position-relative">
                      <img
                        className="checkout-product-image"
                        src={soapdispenser}
                        alt=""
                      />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        1
                      </span>
                    </div>

                    <div className="checkout-product-details ps-2">
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

                <div className="checkout-product ">
                  <div className="d-flex">
                    <div className="position-relative">
                      <img
                        className="checkout-product-image"
                        src={tables}
                        alt=""
                      />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        1
                      </span>
                    </div>
                    <div className="checkout-product-details ps-2">
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

                <div className="checkout-product ">
                  <div className="d-flex">
                    <div className="position-relative">
                      <img
                        className="checkout-product-image"
                        src={chair}
                        alt=""
                      />
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                        1
                      </span>
                    </div>
                    <div className="checkout-product-details ps-2">
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
              <button className="checkout-button rounded btn btn-dark text-select">
                continue to shipping
              </button>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="checkout-payment-container">
              <h3 className="ps-2">already have an account? login</h3>
              <div className="form-container ps-2 pe-4 py-2">
                <CheckoutLoginForm />
              </div>
              <div className="pay-buttons">
                <img src={botonMercadoPago} className="mercadopago" />
                <img src={visaNet} className="ebrou" />
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
