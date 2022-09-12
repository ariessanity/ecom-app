import { request, success, fail } from "../slice//registerSlice";
import axios from "axios";

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(request());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
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
