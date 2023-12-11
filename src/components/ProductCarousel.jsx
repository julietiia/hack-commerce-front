import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/Product.css";

function ProductCarousel({ oneProduct, imagesUrl }) {
  return (
    <Carousel className="mt-2">
      {oneProduct.image.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="product-image"
            src={`${imagesUrl}products/${image}`}
            alt={`Product Image ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}


export default ProductCarousel;
