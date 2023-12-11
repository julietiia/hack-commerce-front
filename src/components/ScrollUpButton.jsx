import React from "react";
import { useState, useEffect } from "react";

function ScrollUpButton() {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.clientHeight;
      
    //ver si queremos que se muestre a la mitad de la pantalla 
      setIsShowing(scrollY > pageHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handleClick} style={{display: isShowing ? "block" : "none"}} >
      <i className="bi bi-arrow-bar-up custom-scroll-up-button"></i>
    </div>
  );
}

export default ScrollUpButton;
