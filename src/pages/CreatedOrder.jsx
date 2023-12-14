import React from "react";
import "../components/css/checkout.css";
import createdOrder from "../assets/img/createdOrder.jpg";

import CompleteTheLookWith from "../components/CompleteTheLookWith";

function CreatedOrder() {
  return (
    <>
      <div className="container order-bg-container">
        <div className="row my-3">
          <div className="col-lg-6 col-md-12 message-container sm-m-5">
            <h2 className="succesfull-order-title">
              Your order has been created
            </h2>
            <p className="succesfull-order-message">
              You can now go to{" "}
              <a href="/my-orders" className="my-orders-link">
                My Orders
              </a>{" "}
              to see the status <br />
              of your purchase.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img className="created-order-bg" src={createdOrder} alt="" />
          </div>
        </div>
      </div>
      <CompleteTheLookWith />
    </>
  );
}

export default CreatedOrder;
