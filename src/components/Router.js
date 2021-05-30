import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Profile from './Profile.js';
import Introduction from './Introduction.js';
import Location from './Location.js';
import Community from './Community.js';

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/introduction">
        <Introduction />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/location">
        <Location />
      </Route>
      <Route exact path="/community">
        <Community />
      </Route>
    </Router>
  );
};

export default AppRouter;
