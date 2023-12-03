import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./css/ShoppingCart.css";
import { useNavigate } from "react-router-dom";

function OffCanvasShoppingCart({ showCart, handleCloseCart, handleShowCart, ...props }) {
  const navigate = useNavigate();

  return (
    <>
      <Offcanvas show={showCart} onHide={handleCloseCart} {...props} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="row product-cart rounded">
              <div className="col-4">
                <div className="one-product-div">
                  <img
                    className="one-product-pic w-100"
                    src="/src/assets/img/chair.png"
                    alt="nombre del producto"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="product-info-cart">
                  <p>chair</p>
                  <div className="quantity">
                    <p className="btn">-</p>
                    <p>1</p>
                    <p className="btn">+</p>
                  </div>
                </div>
              </div>
              <div className="col-4 third-box">
                <i className="bi bi-trash3"></i>
                <p>150USD</p>
              </div>
            </div>
            <div className="row product-cart rounded mt-2">
              <div className="col-4">
                <div className="one-product-div">
                  <img
                    className="one-product-pic w-100"
                    src="/src/assets/img/metallic_lamppng.png"
                    alt="nombre del producto"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="product-info-cart">
                  <p>chair</p>
                  <div className="quantity">
                    <p className="btn">-</p>
                    <p>1</p>
                    <p className="btn">+</p>
                  </div>
                </div>
              </div>
              <div className="col-4 third-box">
                <i className="bi bi-trash3"></i>
                <p>40USD</p>
              </div>
            </div>
            <div className="row">
              <button
                className="col-12 mt-3 btn check-out-button rounded"
                onClick={() => navigate("/checkout")}
              >
                check out
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasShoppingCart;
