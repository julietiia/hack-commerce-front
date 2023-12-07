import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastify() {
  return (
    <div>
      <ToastContainer className="toast-custom"/>
    </div>
  );
}

export default Toastify;
