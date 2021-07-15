import { Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import ProfileList from "./ProfileList.js";
import Introduction from "./Introduction.js";
import Location from "./Location.js";
import Community from "./Community.js";
import NotFound from "./NotFound.js";
import CommunityWrite from "./CommunityWrite.js";
import Post from "./Post.js";
import Login from "./Login.tsx";
import Signup from "./Signup.js";
// import React from "react";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/fxweb" component={Home} />
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/profile" component={ProfileList} />
      <Route exact path="/location" component={Location} />
      <Route exact path="/community" component={Community} />
      <Route exact path="/communityWrite" component={CommunityWrite} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRouter;
