import "../components/css/MyOrders.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { nanoid } from '@reduxjs/toolkit'
import { Spinner } from "react-bootstrap";

function MyOrders() {
  const userToken = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

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
      <div className="container table-container">
        <div className="row">
          <div className="title">
            <h3 className="mt-5">My orders</h3>
          </div>

          <div className="col">
            <div className="my-table">
              <table className="table table-bordered my-table">
                <thead>
                  <tr>
                    <th scope="col">Order</th>
                    <th scope="col">Date</th>
                    <th scope="col">Products</th>
                    <th scope="col">State</th>
                    <th scope="col">Total USD</th>
                  </tr>
                </thead>
                {orders.map((order) => (
                  <tbody key={order.id}>
                    <tr>
                      <td>{order.id}</td>
                      <td>{order.date}</td>

                      {order.products.map((product) => (
                        <React.Fragment key={nanoid()}>
                          <td className="d-flex">
                            <p className="order-product-detail">
                              Id.{product.product.id} - Qty.{product.quantity}
                            </p>
                            <p className="order-product-detail">
                              - {product.product.name}
                            </p>
                          </td>
                        </React.Fragment>
                      ))}
                      <td className="">{order.state}</td>
                      <td className="fw-semibold">
                        {calculateTotalPrice(order)}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
