import { configureStore } from "@reduxjs/toolkit";
import movieslice from "./slice/movieslice";

export const store = configureStore({
  reducer: movieslice,
});
