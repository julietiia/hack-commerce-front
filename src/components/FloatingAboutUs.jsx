import React from "react";
import "../components/css/FloatingAboutUs.css";

function FloatingAboutUs() {
  return (
    <div className="float-container">
      <div className="btn-float">
        <a href="/about-this-project">About this project</a>
      </div>
      <div className="btn-float-mobile">
        <a href="/about-this-project"><i class="bi bi-info-lg"></i></a>
      </div>
    </div>
  );
}

export default FloatingAboutUs;
