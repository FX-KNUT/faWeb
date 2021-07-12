import "./App.css";
import { createStore } from "redux";
import Header from "./Header.js";
import reducer from "./Reducer";
import Router from "./Router.js";
import { useEffect, useState } from "react";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const store = createStore(reducer);

function App(): JSX.Element {
  const [init, setInit] = useState(true);

  // var login_logout_icon = <RiLoginBoxFill />;
  // const loggedRender = () => {
  //   const loggedState = store.getState().loggedIn;

  //   login_logout_icon = loggedState ? <RiLogoutBoxRFill /> : <RiLoginBoxFill />;
  // };
  // // subscribe()가 사용되어야 됨.
  // store.subscribe(loggedRender);

  // const onLoginClicked = () => {
  //   console.log(store.getState().loggedIn);
  //   if (store.getState().loggedIn === false) {
  //   } else {
  //     store.dispatch({ type: { loc: "", loggedIn: "false" } });
  //     console.log(store.getState().loggedIn);
  //   }
  // };

  const locChanged = () => {
    const { loc } = store.getState();
    const App = document.querySelector(".App");
    App!.className = "App " + loc;
  };

  const changeHandler = {
    locChangeHandler: locChanged,
  };

  store.subscribe(changeHandler.locChangeHandler);

  useEffect(() => {
    /* ~~ */
    setInit(false);
  }, []);

  return (
    <div id="App" className="App">
      <header>
        <Header />
      </header>
      <main className="main">{init ? "Loading..." : <Router />}</main>
      {/* 로그인 아이콘을 보여줌. */}
      <Link to="/login">
        <RiLoginBoxFill className="login_icon" />
      </Link>
    </div>
  );
}

export default App;
