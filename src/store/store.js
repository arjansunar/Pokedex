import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/CounterSlice";

export const store = configureStore({
  reducers: {
    counter: counterSlice.reducer,
  },
});
