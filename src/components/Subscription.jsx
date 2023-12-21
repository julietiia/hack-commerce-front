import React from "react";
import "../components/css/Subscription.css";
import subscription from "../assets/img/subscription.png"


function Subscription() {
  return (
    <div className="container subscription-background mb-4">
      <div className="row">
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <img className="subscription-img" src={subscription} alt="" />
        </div>
        <div className="col-sm-12 col-md-8 subscription-message">
          <h3 className="newsletter-tittle mt-2">Subscribe to our newsletter</h3>
          <p className="newsletter-paragraph mt-4">
            Stay up to date with all our products, and get the newsletter
            straight to your inbox. Get first dibs on new arrivals, sales,
            exclusive content, events and more!
          </p>
          <form action="" className="w-100">
            <input
              type="text"
              className=" subscribe-input"
              placeholder="Your email goes here"
            />
            <label htmlFor="subscribe"></label>
            <button className="m-2 btn btn-dark  subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
