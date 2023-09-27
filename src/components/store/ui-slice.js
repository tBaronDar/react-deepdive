import { createSlice } from "@reduxjs/toolkit";

const intitialCartState = { showCart: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: intitialCartState,
  reducers: {
    cartToggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
