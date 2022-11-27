import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/redux";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const authDispatcher = useDispatch();

  const btnHandler = function (e) {
    e.preventDefault();

    authDispatcher(actions.auth.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={btnHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
