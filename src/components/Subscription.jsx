import React from "react";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="container container-background mb-5">
      <div className="row">
        <div className="col-6">
          <h6 className="newsletter-tittle mt-4">subscribe to our newsletter</h6>
          <p className="newsletter-paragraph mt-4 text-start">
            Stay up to date with all our designs, and get the newsletter
            straight to your inbox. Get first dibs on new arrivals, sales,
            exclusive content, events and more!
          </p>
        </div>
      </div>
      <form action="" className="mt-3 mb-5">
        <input type="text" className="rounded" placeholder="your emails goes here" />
        <label htmlFor="subscribe"></label>
        <button className="rounded btn btn-dark text-select">subscribe</button>
      </form>
    </div>
  );
}

export default Subscription;
