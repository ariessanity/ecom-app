import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: { reviews: [] },
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    request: (state, action) => {
      return {
        loading: true,
        // ...state,
      };
    },

    success: (state, action) => {
      return {
        loading: false,
        product: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
