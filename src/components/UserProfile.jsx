import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

function UserProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
    <div className="user-profile-info d-flex gap-5">
     <i className="bi bi-person-circle profile-icon"></i>
      <div className="user-profile-info">
        <h3 className="mb-2">
          {user.firstname} {user.lastname}
        </h3>
        <p>{user.email}</p>
        <p>{user.address}</p>
      </div>
      </div>
      <button
        onClick={() => dispatch(logout())}
        type="submit"
        className="col-12 btn btn-dark check-out-button rounded"
      >
         <i className="bi bi-box-arrow-right"></i>Log out
      </button>
    </>
  );
}

export default UserProfile;
