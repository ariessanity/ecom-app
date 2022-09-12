import { request, success, fail } from "../slice/productSlice";
import axios from "axios";

export const listProducts =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch(request());
      const { data } = await axios.get(`/api/products?keyword=${keyword}`);
      dispatch(success(data));
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;

      dispatch(fail(error));
    }
  };
