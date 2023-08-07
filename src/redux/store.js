import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import pcBuildReducer from "./features/pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pcBuilder: pcBuildReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
