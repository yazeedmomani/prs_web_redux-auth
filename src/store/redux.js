import { createStore } from "redux";

const INITIAL_STATE = {
  count: 0,
  isShown: false,
};

const reduxReducer = function (state = INITIAL_STATE, action) {
  if (action.type === "ADD_ONE") {
    return {
      count: state.count + 1,
      isShown: state.isShown,
    };
  }
  if (action.type === "SUBTRACT_ONE") {
    return {
      count: state.count - 1,
      isShown: state.isShown,
    };
  }

  if (action.type === "ADD") {
    return {
      count: state.count + action.amount,
      isShown: state.isShown,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      count: state.count,
      isShown: !state.isShown,
    };
  }

  return state;
};

const Store = createStore(reduxReducer);

export default Store;
