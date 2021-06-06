import './App.css';
import { createStore } from 'redux';
import Header from './Header.js';
import reducer from './Reducer';
import Router from "./Router.js";
import { useEffect, useState } from 'react';

export const store = createStore(reducer);

function App() : JSX.Element {

  const [init, setInit] = useState(true);

  const locChanged = () => {
    const { loc } = store.getState();
    const App = document.querySelector(".App");
    App!.className = "App " + loc;
  };

  const changeHandler = {
    locChangeHandler: locChanged
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
      <main className="main">
        {init ? "Loading..." : <Router />}
      </main>
    </div>
  );
}

export default App;
