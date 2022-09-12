import { request, success, fail, logout } from "../slice/userSlice";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(request());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch(success(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;

    dispatch(fail(error));
  }
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(logout());
};
