import Counter from "./components/Counter";
import { Fragment } from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}

      <Counter />
    </Fragment>
  );
}

export default App;
