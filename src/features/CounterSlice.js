import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
