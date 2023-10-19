import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), apiSlice.middleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export * from "./hooks";
export default store;
