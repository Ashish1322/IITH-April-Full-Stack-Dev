import { configureStore } from "@reduxjs/toolkit";
import contactslice from "./slices/contactslice";

export const store = configureStore({
  reducer: contactslice,
});
