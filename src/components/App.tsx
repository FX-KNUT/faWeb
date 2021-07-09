import "./App.css";
import { createStore } from "redux";
import Header from "./Header.js";
import reducer from "./Reducer";
import Router from "./Router.js";
import Login from "./Login";
import { useEffect, useState } from "react";
import CommunitySave from "./CommunitySave";
import ContentModal from "./ContentModal";
import { RiLoginBoxFill, RiLogoutBoxRFill } from "react-icons/ri";

export const store = createStore(reducer);

function App(): JSX.Element {
  const [init, setInit] = useState(true);

  const currLogin = store.getState().loggedIn;

  // subscribe()가 사용되어야 됨.
  const login_logout_icon = currLogin ? (
    <RiLogoutBoxRFill />
  ) : (
    <RiLoginBoxFill />
  );
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
        {/* 커뮤니티 컴포넌트의 등록을 눌렀을 경우 나타나는 모달 */}
        <div className="saveModal">
          <CommunitySave />
        </div>
        {/* Community의 각 글을 보여주는 modal */}
        <div className="contentModal">
          <ContentModal />
        </div>
      </div>
      {/* 로그인 아이콘을 보여줌. */}
      <span id="header-right">
        <p id="header-right-login" onClick={onLoginClicked}>
          {login_logout_icon}
        </p>
        {/* <MdAccountCircle className="account" /> */}
      </span>
    </div>
  );
}

export default App;
