import React from "react";
import "../components/css/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import OffCanvasSignIn from "../components/OffCanvasSignIn";

function SignUp() {
  const handleShowSignIn = (event) => setShowSignIn(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const handleCloseSignIn = (event) => setShowSignIn(false);
  return (
    <>
      <div className="container">
        <div className="row signUp">
          <div className="col-xl-10 col-md-12 my-5">
            <div className="text-center">
              <h2>Create a new account</h2>
              <h4>Already have an account?</h4>
              <span
                className="text-decoration-underline"
                onClick={(event) => handleShowSignIn(event)}
              >Log in here
              </span>
              <OffCanvasSignIn
                showSignIn={showSignIn}
                handleCloseSignIn={() => setShowSignIn(false)}
              />
            </div>
            <div className="row d-flex justify-content-center mt-3 p-3">
              <div className="col-md-8 p-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      Firstname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="Firstname"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Lastname
                    </label>
                    <input type="text" className="form-control" id="lastname" placeholder="Lastname"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="user@mail.com"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input type="text" className="form-control" id="adress" placeholder="Street name, 9999"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input type="number" className="form-control" id="phone" placeholder="+00 000 00000"/>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      aria-describedby="passwordHelpBlock"
                    />
                    <div id="passwordHelpBlock" className="form-text">
                      Your password must be 8-20 characters long, contain
                      letters and numbers and special characters.
                    </div>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Yes, I agree to the terms and conditions and the policy
                      privacy.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="col-12 mt-3 btn btn-dark check-out-button rounded"
                  >
                    Create account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
