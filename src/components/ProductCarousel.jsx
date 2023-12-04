import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./css/Product.css";

function ProductCarousel({ product, imagesUrl }) {
  return (
    <Carousel className="mt-2">
      {product.image.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="product-image img-fluid"
            src={`${imagesUrl}products/${image}`}
            alt={`Product Image ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
