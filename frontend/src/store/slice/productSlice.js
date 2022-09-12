import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    request: (state, action) => {
      return {
        loading: true,
        products: [],
      };
    },

    success: (state, action) => {
      return {
        loading: false,
        products: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productsSlice.actions;
export default productsSlice.reducer;
