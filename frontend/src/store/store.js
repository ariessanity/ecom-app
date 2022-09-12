import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsSlice from "../store/slice/productSlice";
import productDetailsSlice from "../store/slice/productDetailsSlice";
import cartSlice from "./slice/cartSlice";
import loginSlice from "./slice/userSlice";
import userRegisterSlice from "../store/slice/registerSlice";
import userDetailsSlice from "./slice/userDetailsSlice";
import userUpdateProfileSlice from "./slice/userUpdateProfileSlice";
import orderSlice from "./slice/orderSlice";
import orderDetailsSlice from "./slice/orderDetailsSlice";
import productTopSlice from "./slice/productTopSlice";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    productsReducer: productsSlice,
    productDetailsReducer: productDetailsSlice,
    cartReducer: cartSlice,
    userRegisterReducer: userRegisterSlice,
    userDetailsReducer: userDetailsSlice,
    loginReducer: loginSlice,
    userUpdateProfileReducer: userUpdateProfileSlice,
    orderReducer: orderSlice,
    orderDetailsReducer: orderDetailsSlice,
    productTopReducer: productTopSlice,
  },
  preloadedState: {},
  middleware,
});

export default store;
