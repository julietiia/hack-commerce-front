import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"
import pageReducer from "./pageSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    page: pageReducer,
  },
});

export default store;
