import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
