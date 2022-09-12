import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userRegisterSlice = createSlice({
  name: "register",
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
        userInfo: action.payload,
      };
    },

    fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
  },
});

export const { request, success, fail } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
