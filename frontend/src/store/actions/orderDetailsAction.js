import { request, success, fail } from "../slice/orderDetailsSlice";
import axios from "axios";

export const getOrderDetails = (id) => async (dispatch, getState) => {
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

    const { data } = await axios.get(`/api/orders/${id}`, config); // user - data to update with
    dispatch(success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;

    dispatch(fail(error));
  }
};
