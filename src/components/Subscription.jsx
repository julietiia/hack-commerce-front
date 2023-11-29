import React from "react";
import "../components/css/Subscription.css";
import bell from "../assets/bell.png"


function Subscription() {
  return (
    <div className="container container-background mb-5">
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img className="subscription-img" src={bell} alt="" />
        </div>
        <div className="col-6">
          <h3>subscribe to our newsletter</h3>
          <p className="newsletter-paragraph mt-4 text-start">
            Stay up to date with all our designs, and get the newsletter
            straight to your inbox. Get first dibs on new arrivals, sales,
            exclusive content, events and more!
          </p>
          <form action="" className="w-100">
            <input
              type="text"
              className=" subscribe-input"
              placeholder="your email goes here"
            />
            <label htmlFor="subscribe"></label>
            <button className="ms-2 btn btn-dark text-select subscribe-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
