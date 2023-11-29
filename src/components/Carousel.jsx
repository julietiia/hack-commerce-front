import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"


function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={banner} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner2} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner3} alt="" />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;