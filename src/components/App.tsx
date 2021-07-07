import "./App.css";
import { createStore } from "redux";
import Header from "./Header.js";
import reducer from "./Reducer";
import Router from "./Router.js";
import Login from "./Login";
import { useEffect, useState } from "react";
import CommunitySave from "./CommunitySave";

export const store = createStore(reducer);

function App(): JSX.Element {
  const [init, setInit] = useState(true);

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
      </div>
    </div>
  );
}

export default App;
