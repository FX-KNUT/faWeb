import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("./Home/Home"));
const ProfileList = loadable(() => import("./Profile/ProfileList"));
const Introduction = loadable(() => import("./Introduction"));
const Location = loadable(() => import("./Location"));
const Community = loadable(() => import("./Community/Community"));
const Post = loadable(() => import("./Community/Post"));
const Login = loadable(() => import("./Header/Login"));
const Signup = loadable(() => import("./Header/Signup"));
const NotFound = loadable(() => import("./Header/NotFound"));
const CommunityWrite = loadable(() => import("./Community/CommunityWrite"));

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
