import { createSlice } from "@reduxjs/toolkit";

const intitialCartState = { showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: intitialCartState,
  reducers: {
    cartToggle(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state) {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
