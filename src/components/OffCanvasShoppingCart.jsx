import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./css/ShoppingCart.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import {incrementQuantity, decrementQuantity} from "../redux/cartSlice"
import { useDispatch } from "react-redux";

function OffCanvasShoppingCart({
    showCart,
    handleCloseCart,
    handleShowCart,
    ...props
}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart);
    const [quantity, setQuantity] = useState();
    const [productQuantity, setProductQuantity] = useState(
        cartProducts.reduce((quantity, cart) => {
            quantity[cart.product.id] = cart.quantity;
            return quantity;
        }, {})
    );
    // console.log(cartProducts)

    return (
        <>
            <Offcanvas
                show={showCart}
                onHide={handleCloseCart}
                {...props}
                placement={"end"}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                        <div className="row product-cart rounded">
                            {cartProducts.map((cart) => (
                                <div key={cart.product.id}>
                                    <div className="col-4">
                                        <div className="one-product-div">
                                            <img
                                                className="one-product-pic w-100"
                                                src={`${
                                                    import.meta.env
                                                        .VITE_IMAGES_URL
                                                }products/${
                                                    cart.product.image[1]
                                                }`}
                                                alt="nombre del producto"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="product-info-cart">
                                            <p>{cart.product.name}</p>
                                            <div className="quantity">
                                                <button className="btn" onClick={()=> dispatch(decrementQuantity(cart.product.id))
                                                    }>
                                                    -
                                                </button>
                                                <p>{cart.quantity}</p>
                                                <button
                                                    className="btn"
                                                    onClick={()=> dispatch(incrementQuantity(cart.product.id))
                                                    }
                                                >
                                                    {" "}
                                                    +{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 third-box">
                                        <i className="bi bi-trash3"></i>
                                        <p>{cart.product.price} USD</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row">
                            <button
                                className="col-12 mt-3 btn btn-dark check-out-button rounded"
                                onClick={() => navigate("/checkout")}
                            >
                                Check out
                            </button>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasShoppingCart;
