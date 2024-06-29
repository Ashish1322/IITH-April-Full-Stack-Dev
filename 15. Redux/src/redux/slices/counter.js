import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increaeCounter: (state, action) => {
      state.counter += action.payload.value;
    },
    decreaseCounter: (state, action) => {
      state.counter -= action.payload.value;
    },
  },
});

export default counterSlice.reducer;
export const { increaeCounter, decreaseCounter } = counterSlice.actions;
