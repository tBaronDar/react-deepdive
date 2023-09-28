import { createSlice } from "@reduxjs/toolkit";

const intitialCartState = { showCart: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: intitialCartState,
  reducers: {
    cartToggle(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
