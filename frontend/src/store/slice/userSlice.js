import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage
  // userLogin: { userInfo: userInfoFromStorage },
};

const loginSlice = createSlice({
  name: "login",
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

    logout: (state, action) => {
      return {};
    },
  },
});

export const { request, success, fail, logout } = loginSlice.actions;
export default loginSlice.reducer;
