import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import productReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    items: productReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
