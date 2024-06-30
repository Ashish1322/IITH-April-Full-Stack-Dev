import { configureStore } from "@reduxjs/toolkit";
import newsslice from "./slices/newsslice";

export const store = configureStore({
  reducer: newsslice,
});
