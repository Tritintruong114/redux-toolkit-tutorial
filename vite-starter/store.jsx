import { configureStore } from "@reduxjs/toolkit";
import cartRudcer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartRudcer,
    modal: modalReducer,
  },
});
