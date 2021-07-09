interface state {
  loc: string; // header
  loggedIn: boolean; // 로그인 여부.
}

interface action {
  type: Record<Type, string>;
}

type Type = "loc" | "loggedIn";

const reducer = (
  state: state = {
    loc: "",
    loggedIn: false,
  },
  action: action
): state => {
  switch (action.type.loggedIn) {
    case "true":
      state.loggedIn = true;
      return state;
    case "false":
      state.loggedIn = false;
      return state;
    default:
    // nothing
  }
  switch (action.type.loc) {
    case "home":
      state.loc = "home";
      return state;
    case "introduction":
      state.loc = "introduction";
      return state;
    case "profile":
      state.loc = "profile";
      return state;
    case "location":
      state.loc = "location";
      return state;
    case "community":
      state.loc = "community";
      return state;
    default:
    // nothing
  }
  return state;
};

export default reducer;
