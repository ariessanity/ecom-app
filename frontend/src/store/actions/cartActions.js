import axios from "axios";
import {
  addItem,
  removeItem,
  saveAddress,
  savePayment,
} from "../slice/cartSlice";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch(
    addItem({
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      count: data.countInStock,
      qty,
    })
  );

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch(removeItem(id));

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch(saveAddress(data));

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch(savePayment(data));

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
