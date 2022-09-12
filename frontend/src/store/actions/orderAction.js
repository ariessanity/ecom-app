import { request, success, fail } from "../slice/orderSlice";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(request());

    const {
      loginReducer: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config); // user - data to update with
    dispatch(success(data));


  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;

    dispatch(fail(error));
  }
};
