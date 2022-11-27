import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const isShown = useSelector((state) => state.isShown);
  const dispatcher = useDispatch();

  const addOneHandler = () => {
    dispatcher({ type: "ADD_ONE" });
  };

  const subOneHandler = () => {
    dispatcher({ type: "SUBTRACT_ONE" });
  };

  const addHandler = () => {
    dispatcher({ type: "ADD", amount: 10 });
  };

  const toggleCounterHandler = () => {
    dispatcher({ type: "TOGGLE" });
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
