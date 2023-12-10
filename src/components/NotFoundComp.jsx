import React from "react";
import emptyroom from "../assets/img/emptyroom.jpg";
import "../components/css/NotFound.css";

function NotFound() {
  return (
    <div className="container-fluid bg-container">
      <h1 className="not-found-text">not found</h1>
      <img className="not-found-bg vh-100" src={emptyroom} alt="" />
    </div>
  );
}

export default NotFound;
