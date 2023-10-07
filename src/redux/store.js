import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice/appSlice";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    appSettings: appReducer,
  },
});
