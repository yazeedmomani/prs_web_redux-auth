import { useDispatch } from "react-redux";
import { actions } from "../store/redux";
import classes from "./Auth.module.css";

const Auth = () => {
  const authDispatcher = useDispatch();

  const btnHandler = function (e) {
    e.preventDefault();

    authDispatcher(actions.auth.logIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <button onClick={btnHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
