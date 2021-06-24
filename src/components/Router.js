import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import ProfileList from "./ProfileList.js";
import Introduction from "./Introduction.js";
import Location from "./Location.js";
import Community from "./Community.js";
import NotFound from "./NotFound.js";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/fxweb">
        <Home />
      </Route>
      <Route exact path="/introduction">
        <Introduction />
      </Route>
      <Route exact path="/profile">
        <ProfileList />
      </Route>
      <Route exact path="/location">
        <Location />
      </Route>
      <Route exact path="/community">
        <Community />
      </Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
};

export default AppRouter;
