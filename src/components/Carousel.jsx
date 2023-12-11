import React from "react";
import Carousel from "react-bootstrap/Carousel";
import living_retro from "../assets/img/living_retro.jpg";
import living_white from "../assets/img/living_white.jpg";
import living_pink from "../assets/img/living_pink.jpg";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={living_white} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={living_retro} alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={living_pink} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
