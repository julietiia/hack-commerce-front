import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setAllProducts(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const {setAllProducts} = actions;
export default reducer;
