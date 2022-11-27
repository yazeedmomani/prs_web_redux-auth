import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const isShown = useSelector((state) => state.counter.isShown);
  const dispatcher = useDispatch();

  const addOneHandler = () => {
    dispatcher(actions.increment());
  };

  const subOneHandler = () => {
    dispatcher(actions.decrement());
  };

  const addHandler = () => {
    dispatcher(actions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatcher(actions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>{count}</div>}
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={addHandler}>Add</button>
      <button onClick={subOneHandler}>Subtract One</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
