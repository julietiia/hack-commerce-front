import "../components/css/MyOrders.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function MyOrders() {
  const userToken = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  console.log(orders);

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
        setLoading(false);
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
      <div className="container ">
        <div className="row my-orders-title">
          <div className="col-10">
            <h3 className="m-0">My orders</h3>
          </div>
        </div>
        <div className="row my-orders-body">
          <div className="col-10">
            {loading ? ( // Si los datos están cargando, mostrar un spinner
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              // Si los datos están cargados, mostrar el componente
              orders.map((order) => (
                <div className="my-order" key={order.id}>
                  <div className="row">
                    <p className="my-order-date">
                      {moment(order.date).format("DD/MM/YYYY")}
                    </p>
                  </div>
                  <hr />
                  <div className="row">
                    {order.products.map((product) => (
                      <React.Fragment key={product.product.id}>
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
                          <p>USD {calculateTotalPrice(order)}</p>
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
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
