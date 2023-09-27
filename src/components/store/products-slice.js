//import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = [
  {
    title: "Test",
    price: 8,
    description: "This is a first product - amazing!",
    id: "P1",
  },
  {
    title: "Useful",
    price: 12,
    description: "A very useful thing!",
    id: "P2",
  },
];

// const productsSlice = createSlice({
//   name: "products",
//   initialState: initialProductsState,
//   reducers: {},
// });

export default initialProductsState;
