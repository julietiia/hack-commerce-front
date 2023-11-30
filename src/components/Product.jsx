import "./css/Product.css";
import AddToCartButton from "./AddToCartButton";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import DiscoverSimilarDesigns from "./DiscoverSimilarDesigns";

function Product() {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [shippingReturnsOpen, setShippingReturnsOpen] = useState(false);
  const [stockAvailableOpen, setStockAvailableOpen] = useState(false);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <img
              className="product-image img-fluid"
              src="/src/assets/img/alexia_chair_lifestyle.webp"
              alt="chair"
            />
          </div>
          <div className="col-6">
            <div className="text-start mt-4">
              <h3 className="text-start">Alexia chair</h3>
              <p className="fw-bold text-start">000UYU</p>
              <p className="text-start product-description">Ref.53494878</p>
              <p className="text-start mt-4">
                This armchair lends a luxurious interpretation of modernist
                silhouettes to your space. Tri-leg chair features cushions at
                seat and back, set on a wrapped and folded structure that feels
                so fresh and unexpected. This custom piece of furniture will be
                made to order just for you. Available exclusively at Urban
                Outfitters. Measures: 52X34X62CM
              </p>
            </div>
            <div>
              <select
                name="quantity"
                id="quantity"
                className="m-2 btn btn-dark text-white text-select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <AddToCartButton />
            </div>
            <div className="container mt-4">
              <div>
                <p
                  className="product-features text-start mt-4 fw-bold"
                  role="button"
                  onClick={() => setProductDetailsOpen(!productDetailsOpen)}
                  aria-controls="productDetails"
                  aria-expanded={productDetailsOpen}
                >
                  Product details
                </p>
                <Collapse in={productDetailsOpen}>
                  <div id="productDetails">
                    <Card>
                      <Card.Body>
                        <p className="collapse-details-text text-start">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Cumque illum beatae accusantium amet qui
                          quibusdam?
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </Collapse>

                <p
                  className="product-features text-start fw-bold"
                  role="button"
                  onClick={() => setShippingReturnsOpen(!shippingReturnsOpen)}
                  aria-controls="shippingReturns"
                  aria-expanded={shippingReturnsOpen}
                >
                  Shipping + Returns
                </p>
                <Collapse in={shippingReturnsOpen}>
                  <div id="shippingReturns">
                    <Card>
                      <Card.Body>
                        <p
                          className="collapse-details-text text-start"
                          role="button"
                        >
                          Shipping and Returns details go here.
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </Collapse>

                <p
                  className="product-features text-start fw-bold"
                  role="button"
                  onClick={() => setStockAvailableOpen(!stockAvailableOpen)}
                  aria-controls="stockAvailable"
                  aria-expanded={stockAvailableOpen}
                >
                  Stock available in store
                </p>
                <Collapse in={stockAvailableOpen}>
                  <div id="stockAvailable">
                    <Card>
                      <Card.Body>
                        <p className="collapse-details-text text-start">
                          Stock availability information goes here.
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section>
            <div className="container similar-products-background my-5">
              <div className="row">
                <div className="col">
                  <h2 className="d-flex justify-content-center my-4">
                    discover similar designs
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col list-similar-products">
                  <DiscoverSimilarDesigns />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Product;
