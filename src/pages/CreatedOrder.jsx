import React from "react";
import "../components/css/checkout.css";
import createdOrder from "../assets/img/createdOrder.jpg";


function CreatedOrder() {
  return (
    <div className="container order-bg-container">
      <div className="col-6 message-container">
        <h1 className="succesfull-order-title">Your order <br /> has been created</h1>
        <p className="succesfull-order-message">
          You can now go to <a href="/" className="my-orders-link">My Orders</a> to see the status <br />of your purchase.
        </p>
      </div>

      <img className="created-order-bg" src={createdOrder} alt="" />
    </div>
  );
}

export default CreatedOrder;
