import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
export const myStore = configureStore({
  reducer: counter,
});
