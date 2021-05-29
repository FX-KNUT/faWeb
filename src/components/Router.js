import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Profile from './Profile.js';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Router>
  );
};

export default AppRouter;
