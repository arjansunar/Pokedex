import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/CounterSlice";
import { pokemonApi } from "../api/slice/pokemon.slice";

export const store = configureStore({
  reducer: {
    // reducer generated from rtk-query
    // must be a top level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // counter: counterSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});
