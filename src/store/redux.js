import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    logIn(state) {
      state.isAuth = true;
    },

    logOut(state) {
      state.isAuth = false;
    },
  },
});

export const actions = {
  counter: counterSlice.actions,
  auth: authSlice.actions,
};

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
