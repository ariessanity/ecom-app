import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productTop: [],
};

const productTopSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    request: (state, action) => {
      return {
        loading: true,
        productTop: [],
      };
    },

    success: (state, action) => {
      return {
        loading: false,
        productTop: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productTopSlice.actions;
export default productTopSlice.reducer;
