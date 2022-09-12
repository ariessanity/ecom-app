import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const userUpdateProfileSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    request: (state, action) => {
      return {
        loading: true,
      };
    },

    success: (state, action) => {
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = userUpdateProfileSlice.actions;
export default userUpdateProfileSlice.reducer;
