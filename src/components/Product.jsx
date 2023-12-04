import "./css/Product.css";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import DiscoverSimilarDesigns from "./DiscoverSimilarDesigns";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../redux/productSlice";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function Product() {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [shippingReturnsOpen, setShippingReturnsOpen] = useState(false);
  const [stockAvailableOpen, setStockAvailableOpen] = useState(false);

  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.find((p) => p.id === Number(id))
  );
  const dispatch = useDispatch();

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/products`,
      });
      dispatch(setAllProducts(response.data.products));
    };
    getProduct();
  }, []);

  const handleQuantity = (e) => {
    setSelectedQuantity(Number(e.target.value));
  };

  return (
    <div className="container mt-4">
      {product && (
        <div key={product.id} className="row">
          <div className="col-12 col-md-6">
            <ProductCarousel
              product={product}
              imagesUrl={import.meta.env.VITE_IMAGES_URL}
            />
          </div>

          <div className="col-12 col-md-6 product-description">
            <div className="text-start mt-4">
              <h3 className="text-start">{product.name}</h3>
              <p className="text-start">{product.price} USD</p>
              <p className="text-start mt-4 product-description">
                {product.description}
              </p>
            </div>
            <div className="qtty-option">
              <select
                name="quantity"
                id="quantity"
                className="m-2 btn text-dark text-select background-color-select border border-2"
                onChange={(e) => {
                  handleQuantity(e);
                }}
                value={selectedQuantity}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <AddToCartButton onClick={() =>dispatch(addToCart({ product, quantity: selectedQuantity }))} />
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
                          {product.productDetail
                            .split(".")
                            .map((sentence, index, array) => (
                              <React.Fragment key={index}>
                                {index < array.length - 1 ? (
                                  <>
                                    {sentence.trim()}.<br />
                                  </>
                                ) : (
                                  sentence.trim()
                                )}
                              </React.Fragment>
                            ))}
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
                          Delivery methods may vary depending on the items added
                          to your basket:
                          <br />
                          STANDARD DELIVERY: 5.95 USD
                          <br />
                          In 2-5 business days - Free for orders over 50 USD.
                          <br />
                          DROP POINT: 4.95 USD
                          <br />
                          In 4-5 business days - Free for orders over 50 USD.
                          <br />
                          <br />
                          Returns must be made within 30 days from when you
                          received the shipping confirmation email for your
                          order.
                          <br />
                          Remember that you need the purchase receipt to return
                          any item.
                          <br />
                          The items you return must be in the same condition you
                          received them in.
                          <br />
                          Remember to print the purchase receipt for your order
                          and include it with your return.
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
                  Stock available in-store
                </p>
                <Collapse in={stockAvailableOpen}>
                  <div id="stockAvailable">
                    <Card>
                      <Card.Body>
                        <p className="collapse-details-text text-start">
                          Sorry, we are currently building this functionality.
                          You'll be able to use it soon. Please check back
                          later.
                        </p>
                      </Card.Body>
                    </Card>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <section>
          <div className="container similar-design-background my-5">
            {product && product.id && (
              <div className="row">
                <div className="col">
                  <h2 className="d-flex justify-content-center my-4">
                    Discover similar designs
                  </h2>
                </div>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col list-similar-products ">
              {product && product.id && (
                <DiscoverSimilarDesigns productId={product.id} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;
