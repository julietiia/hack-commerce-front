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
                <div className="row d-flex justify-content-center">
                    <div className="col-8 signUp  mt-5 mb-5 p-5 rounded">
                        <div className="text-center">
                        <h2>Create a new account</h2>
                        <span >Already have an account?</span> <span className="text-decoration-underline"  onClick={(event) => handleShowSignIn(event)}>  Sign in here  </span>
                        <OffCanvasSignIn
            showSignIn={showSignIn}
            handleCloseSignIn={() => setShowSignIn(false)}
          />
          </div>
                        <div className="row d-flex justify-content-center mt-3 p-3">
                            <div className="col-7 border border-black border-3 rounded p-4">
                                <form>
                                    <div className="form-check form-check-inline mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="option1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio1"
                                        >
                                            Private customer
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="option2"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="inlineRadio2"
                                        >
                                            Business customer
                                        </label>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label
                                            htmlFor="firstname"
                                            className="form-label"
                                        >
                                            Firstname
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstname"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="lastname"
                                            className="form-label"
                                        >
                                            Lastname
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastname"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                        <div
                                            id="emailHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="address"
                                            className="form-label"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="adress"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="telefono"
                                            className="form-label"
                                        >
                                            Telefono
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="telephono"
                                        />
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
                                            aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers and special characters.
</div>
                                        
                                    </div>
                                   
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="exampleCheck1"
                                        >
                                            Yes, I agree to the terms and conditions and the policy privacy
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="col-12 mt-3 btn check-out-button rounded"
                                    >
                                        create account
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
