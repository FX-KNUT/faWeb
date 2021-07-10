import "./App.css";
import { createStore } from "redux";
import Header from "./Header.js";
import reducer from "./Reducer";
import Router from "./Router.js";
import Login from "./Login";
import { useEffect, useState } from "react";
import { RiLoginBoxFill, RiLogoutBoxRFill } from "react-icons/ri";

export const store = createStore(reducer);

function App(): JSX.Element {
  const [init, setInit] = useState(true);

  var login_logout_icon = <RiLoginBoxFill />;
  const loggedRender = () => {
    const loggedState = store.getState().loggedIn;
    console.log("asdasd" + loggedState);
    login_logout_icon = loggedState ? <RiLogoutBoxRFill /> : <RiLoginBoxFill />;
  };
  // subscribe()가 사용되어야 됨.
  store.subscribe(loggedRender);

  const modal = document.querySelector("#modal");
  const login = document.querySelector("#login");

  const onLoginClicked = () => {
    console.log(store.getState().loggedIn);
    if (store.getState().loggedIn === false) {
      modal?.classList.toggle("show");
      login?.classList.toggle("show");
    } else {
      store.dispatch({ type: { loc: "", loggedIn: "false" } });
      console.log(store.getState().loggedIn);
    }
  };

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
      <div id="modal" className="modal">
        {/* Header의 Login을 눌렀을 경우 나타나는 모달 */}
        <div id="login" className="login">
          <Login />
        </div>
      </div>
      {/* 로그인 아이콘을 보여줌. */}
      <span id="header-right">
        <p id="header-right-login" onClick={onLoginClicked}>
          {login_logout_icon}
        </p>
      </span>
    </div>
  );
}

export default App;
