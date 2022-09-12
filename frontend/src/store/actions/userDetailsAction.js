import { request, success, fail } from "../slice//userDetailsSlice";
import axios from "axios";

export const getUserDetails = (id) => async (dispatch, getState) => {
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

    const { data } = await axios.get(`/api/users/${id}`, config);

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
