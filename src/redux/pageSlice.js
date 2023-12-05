import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {showCart: false},
  reducers: {
    toggleShowModal(state, action) {
      state.showCart = !state.showCart;
    },

  },
});

const { actions, reducer } = pageSlice;
export const { toggleShowModal } = actions;
export default reducer;
