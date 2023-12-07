import React from "react";
import "../components/css/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OffCanvasSignIn from "../components/OffCanvasSignIn";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [showSignIn, setShowSignIn] = useState(false);
    const handleShowSignIn = (event) => setShowSignIn(true);
    const handleCloseSignIn = (event) => setShowSignIn(false);

    const onSubmit = async (data) => {
        console.log(data);
        await axios({
            method: "post",
            url: `${import.meta.env.VITE_PORT_URL}/usuarios`,
            data: data,
        });
        handleShowSignIn();
    };

    return (
        <>
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="col">
                        <h4>Already have an account?</h4>
                        <span
                            className="text-decoration-underline"
                            onClick={(event) => handleShowSignIn(event)}
                        >
                            Log in here
                        </span>
                    </div>
                </div>
                <div className="row d-flex- justify-content-center">
                    <div className="col-xl-10 col-md-10 my-3">
                        <div className="signUp">
                            <div className="text-center pt-5">
                                <h2>Create a new account</h2>

                                <OffCanvasSignIn
                                    showSignIn={showSignIn}
                                    handleCloseSignIn={() =>
                                        setShowSignIn(false)
                                    }
                                />
                            </div>
                            <div className="row d-flex justify-content-center p-3">
                                <div className="col-md-8 p-4">
                                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                                placeholder="Firstname"
                                                {...register("firstname")}
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
                                                placeholder="Lastname"
                                                {...register("lastname")}
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
                                                placeholder="user@mail.com"
                                                {...register("email")}
                                            />
                                            <div
                                                id="emailHelp"
                                                className="form-text"
                                            >
                                                We'll never share your email
                                                with anyone else.
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
                                                id="address"
                                                placeholder="Street name, 9999"
                                                {...register("address")}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="phone"
                                                className="form-label"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phone"
                                                placeholder="+00 000 00000"
                                                {...register("phone")}
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
                                                aria-describedby="passwordHelpBlock"
                                                placeholder="Password"
                                                {...register("password", {
                                                    required: true,
                                                })}
                                            />
                                            <div
                                                id="passwordHelpBlock"
                                                className="form-text"
                                            >
                                                Your password must be 8-20
                                                characters long, contain letters
                                                and numbers and special
                                                characters.
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
                                                Yes, I agree to the terms and
                                                conditions and the policy
                                                privacy.
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="col-12 mt-3 btn btn-dark check-out-button rounded"
                                            onClick={(event) => handleShowSignIn(event)}
                                        >
                                            Create account
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
