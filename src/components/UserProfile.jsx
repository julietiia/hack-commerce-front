import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { clearCart } from "../redux/cartSlice";

function UserProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-info d-flex">
          <i className="bi bi-person"></i>

          <div className="user-profile-info">
            <h4 className="mb-2">
              {user.firstname} {user.lastname}
            </h4>
            <p>{user.email}</p>
            <p>{user.address}</p>
            <a href="/" className="my-orders-user-profile">
              My Orders
            </a>
          </div>
        </div>
        <hr />
        <button
          onClick={() => {
            dispatch(logout());
            dispatch(clearCart());
          }}
          type="submit"
          className="col-12 btn btn-dark check-out-button rounded"
        >
          <i className="bi bi-box-arrow-right"></i>Log out
        </button>
      </div>
    </>
  );
}

export default UserProfile;
