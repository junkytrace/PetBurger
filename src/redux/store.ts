import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import burger from "./slices/burgerSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    burger,
  },
});

export type RootState = ReturnType<typeof store.getState>;
