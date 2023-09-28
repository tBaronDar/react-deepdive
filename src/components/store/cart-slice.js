import { createSlice } from "@reduxjs/toolkit";

const intitialCartState = { cartItems: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: intitialCartState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.cartItems.push({
          title: newItem.title,
          price: newItem.price,
          description: newItem.description,
          id: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const removingItemId = action.payload;
      //console.log(removingItem);
      const existingItem = state.cartItems.find(
        (item) => item.id === removingItemId
      );
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== removingItemId
        );
      } else {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
