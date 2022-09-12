import { request, success, fail } from "../slice/productTopSlice";
import axios from "axios";

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await axios.get(`/api/products/top`);
    dispatch(success(data));
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;

    dispatch(fail(error));
  }
};
