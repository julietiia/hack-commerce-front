import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { Spinner } from "react-bootstrap";

function MyOrders() {
  const userToken = useSelector((state) => state.user);
  console.log(userToken)
  const [orders, setOrders] = useState();

//   useEffect(() => {
//     const getOrders = async () => {
//       const response = await axios({
//         method: "get",
//         url: `${import.meta.env.VITE_PORT_URL}/panel/customers/${}`,
//         headers: {
//           Authorization: `Bearer ${adminToken.token}`,
//         },
//       });
//       setOrders(response.data.orders);
//     };
//     getOrders();
//   }, []);

  return (
    <>
      {/* <div className="col-lg-6 col-md-12">
        <div className="shopping-list-container">
          <h3 className="ps-2">Your shopping list</h3>
          <Breadcrumb />

          <div className="shopping-list">
            {cartProducts.map((cart) => (
              <div className="checkout-product" key={cart.product.id}>
                <div className="d-flex">
                  <div className="position-relative">
                    <img
                      className="checkout-product-image"
                      src={`${import.meta.env.VITE_IMAGES_URL}/${
                        cart.product.image[1]
                      }`}
                      alt={cart.product.name}
                    />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {cart.quantity}
                    </span>
                  </div>

                  <div className="checkout-product-details ps-2">
                    <p className="checkout-product-name">{cart.product.name}</p>
                    <p className="checkout-product-ref">
                      Ref.{cart.product.id}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="checkout-product-price">{cart.product.price}</p>
                </div>
              </div>
            ))}

            <hr />

            <div className="total ps-2 pe-4">
              <p className="checkout-total">Total</p>
              <p className="checkout-total">
                USD{" "}
                {cartProducts.reduce(
                  (acc, { product: { price }, quantity }) =>
                    acc + (price ?? 0) * quantity,
                  0
                )}
              </p>
            </div>
          </div>
                    
        </div>
      </div> */}
    </>
  );
}

export default MyOrders;
