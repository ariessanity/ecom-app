import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {},
};
const userDetailsSlice = createSlice({
  name: "details",
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
        user: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
