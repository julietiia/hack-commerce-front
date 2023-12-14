import "../components/css/MyOrders.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const userToken = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_PORT_URL}/orders/${userToken.id}`,
          headers: {
            Authorization: `Bearer ${userToken.token}`,
          },
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);

  const calculateTotalPrice = (order) => {
    return order.products.reduce((total, product) => {
      return total + product.product.price * product.quantity;
    }, 0);
  };

  return (
    <>
      <div className="container-fluid table-container">
        <div className="row">
          <div className="col-2">
            <div className="my-sidebar">
              <ul className="list-sidebar">
                <li>
                  <a href="" className="nav-link">
                    <h5 className="adminButton">
                      <i className="adminI bi bi-box-seam"></i> My orders
                    </h5>
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link">
                    <h5 className="adminButton">
                      <i className="adminI bi bi-person"></i> My profile
                    </h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-10">
            {orders.map((order) => (
              <div className="my-table">
                <div className="my-order">
                  <div className="row">
                    <p className="my-order-date">{order.date}</p>
                  </div>
                  <hr />
                  <div className="row">
                    {order.products.map((product) => (
                      <React.Fragment key={nanoid()}>
                        <div className="col-2">
                          <img
                            className="checkout-product-image"
                            src={`${import.meta.env.VITE_IMAGES_URL}/${
                              product.product.image[1]
                            }`}
                            alt={product.product.name}
                          />
                        </div>
                        <div className="col-2">
                          <p
                            className={
                              order.state === "confirmed" ||
                              order.state === "shipped" ||
                              order.state === "delivered"
                                ? "state-confirmed"
                                : order.state === "cancelled"
                                ? "state-cancelled"
                                : ""
                            }
                          >
                            {order.state}
                          </p>
                        </div>
                        <div className="col">
                          <p className="order-product-detail">
                            {product.product.name} - {product.quantity} Units
                          </p>
                        </div>
                        <div className="col-2">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              navigate(`/products/${product.product.id}`)
                            }
                          >
                            Buy again
                          </button>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
