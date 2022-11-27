import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
  isShown: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isShown: false },
  reducers: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    increase(state, action) {
      state.count += action.payload;
    },

    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
