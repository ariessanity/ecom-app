import { request, success, fail } from "../slice//userUpdateProfileSlice";
import axios from "axios";

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(request());

    const {
      loginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config); // user - data to update with

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
