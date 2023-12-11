import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProduct(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const {setAllProducts} = actions;
export default reducer;
