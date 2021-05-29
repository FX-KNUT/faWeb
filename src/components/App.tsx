import './App.css';
import { createStore } from 'redux';
import Header from './Header.js';
import reducer from './Reducer';
import Router from "./Router.js";
import { useEffect, useState } from 'react';

export const store = createStore(reducer);

function App() : JSX.Element {

  const [init, setInit] = useState(true);

  useEffect(() => {
    setInit(false);
  }, []);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        {init ? "Loading..." : <Router />}
      </main>
    </div>
  );
}

export default App;
