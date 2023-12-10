import React from "react";

function ScrollUpButton() {
    const handleClick = () => {
        window.scrollTo ({ top: 0, behavior: "smooth"});
    };


  return (
    <div onClick={handleClick}>
      <i className="bi bi-arrow-bar-up custom-scroll-up-button"></i>
    </div>
  );
}

export default ScrollUpButton;
