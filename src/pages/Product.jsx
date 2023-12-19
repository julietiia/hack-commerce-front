import "../components/css/Product.css";
import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import DiscoverSimilarDesigns from "../components/DiscoverSimilarDesigns";
import { useDispatch, useSelector } from "react-redux";
// import { setProduct} from "../redux/productSlice";
import axios from "axios";
import ProductCarousel from "../components/ProductCarousel";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

function Product() {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [shippingReturnsOpen, setShippingReturnsOpen] = useState(false);
  const [stockAvailableOpen, setStockAvailableOpen] = useState(false);

  const params = useParams();
  const [oneProduct, setOneProduct] = useState();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/products/${params.id}`,
      });
      setOneProduct(response.data.product);
    };
    getProduct();
  }, [params.id]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="container mt-4 mb-5">
        {oneProduct && (
          <div key={oneProduct.id} className="row">
            <div className="col-12 col-md-6">
              <ProductCarousel
                oneProduct={oneProduct}
                imagesUrl={import.meta.env.VITE_IMAGES_URL}
              />
            </div>

            <div className="col-12 col-md-6 product-description">
              <div className="text-start mt-4">
                <h3 className="text-start">{oneProduct.name}</h3>
                <p className="text-start">{oneProduct.price} USD</p>
                <p className="text-start mt-2 product-description">
                  {oneProduct.description}
                </p>
              </div>
              <div className="qtty-option mt-4">
                <button
                  className="btn btn-outline-dark qtty-btn"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="m-2 fw-semibold">{quantity}</span>
                <button
                  className="btn btn-outline-dark qtty-btn"
                  onClick={handleIncrement}
                >
                  +
                </button>
                <div className="d-inline ms-3">
                  <AddToCartButton
                    product={oneProduct}
                    quantity={quantity}
                    className="cart-btn"
                  />
                </div>
              </div>
              <div className="container mt-4 p-0">
                <div>
                  <p
                    className="product-features text-start mt-3"
                    role="button"
                    onClick={() => setProductDetailsOpen(!productDetailsOpen)}
                    aria-controls="productDetails"
                    aria-expanded={productDetailsOpen}
                  >
                    {productDetailsOpen ? "-" : "+"} Product details
                  </p>
                  <Collapse in={productDetailsOpen}>
                    <div id="productDetails">
                      <Card>
                        <Card.Body>
                          <p className="collapse-details-text text-start">
                            {oneProduct.productDetail
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
                    className="product-features text-start"
                    role="button"
                    onClick={() => setShippingReturnsOpen(!shippingReturnsOpen)}
                    aria-controls="shippingReturns"
                    aria-expanded={shippingReturnsOpen}
                  >
                    {shippingReturnsOpen ? "-" : "+"} Shipping + Returns
                  </p>
                  <Collapse in={shippingReturnsOpen}>
                    <div id="shippingReturns">
                      <Card>
                        <Card.Body>
                          <p
                            className="collapse-details-text text-start"
                            role="button"
                          >
                            Delivery methods may vary depending on the items
                            added to your basket:
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
                            Remember that you need the purchase receipt to
                            return any item.
                            <br />
                            The items you return must be in the same condition
                            you received them in.
                            <br />
                            Remember to print the purchase receipt for your
                            order and include it with your return.
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  </Collapse>

                  <p
                    className="product-features text-start"
                    role="button"
                    onClick={() => setStockAvailableOpen(!stockAvailableOpen)}
                    aria-controls="stockAvailable"
                    aria-expanded={stockAvailableOpen}
                  >
                    {stockAvailableOpen ? "-" : "+"} Stock available in-store
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
      </div>

      {oneProduct && oneProduct.id && (
        <DiscoverSimilarDesigns
          productId={oneProduct.id}
          category={oneProduct.categoryId}
        />
      )}
    </>
  );
}

export default Product;
