import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/css/Category.css";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import AddToCartButton from "../components/AddToCartButton";
import Spinner from "../components/Spinner";

function Category() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/category/${id}`,
      });
      setCategory(response.data.category);
      setProducts(response.data.products);
      console.log(category.name)
    };
    getCategory();
  }, [id]);
  // se rompe

  return (
    <>
      <div className="header">
        <img
          src="../src/assets/img/banner-category-sillas.jpg"
          alt="image1"
          className="img-banner-category-chairs"
        />
        <div className="title-container">
          <p className="category-title">chairs</p>
          <p className="category-description">
            A chair is a type of seat, typically designed for one person and
            consisting of one or more legs, a flat or slightly angled seat and a
            back-rest. They may be made of wood, metal, or synthetic materials,
            and may be padded or upholstered in various colors and fabrics.​
          </p>
        </div>
      </div>
      {/* <h1>{category.name}</h1> */}
      <div className="container">
        <div className="row mb-5 mt-5">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-lg-3">
              <div className="d-lg-none">
                <div className="image-container">
                  <Carousel>
                    {product.image.map((img, index) => (
                      <Carousel.Item
                        key={index}
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        <img
                          src={`${
                            import.meta.env.VITE_IMAGES_URL
                          }products/${img}`}
                          alt={product.name}
                          className="img-chair"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <div className="image-container">
                  <img
                    onClick={() => navigate(`/product/${product.id}`)}
                    src={`${import.meta.env.VITE_IMAGES_URL}products/${
                      product.image[1]
                    }`}
                    alt={product.name}
                    className="img-chair img1"
                  />

                  <img
                    src={`${import.meta.env.VITE_IMAGES_URL}products/${
                      product.image[0]
                    }`}
                    alt={product.name}
                    className="img-chair top-img"
                  />
                </div>
              </div>
              <div className="shop-product-info d-flex flex-column mb-4">
                <p className="m-0">{product.name}</p>
                <p id="price" className="mb-2 fw-light">
                  {product.price}USD
                </p>
                <AddToCartButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
