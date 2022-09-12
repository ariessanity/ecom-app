import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  order: [],
  shippingAddress: {},
};

export const orderDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    request: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },

    success: (state, action) => {
      return {
        loading: false,
        order: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = orderDetailsSlice.actions;
export default orderDetailsSlice.reducer;
