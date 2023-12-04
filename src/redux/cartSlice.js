import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const existingProduct = state.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
    removeFromCart(state, action) {
      return state;
    },

  },
});

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart } = actions;
export default reducer;
