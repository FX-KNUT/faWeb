interface state {
  loc: string,
  loggedIn: boolean
}

interface action {
  type: {
    loc: string
  }
}

const reducer = (state: state = {loc: '', loggedIn: false}, action: action): state => {
  switch (action.type.loc) {
    case "home":
      state.loc = 'home';
      return state;
    case "introduction":
      state.loc = 'introduction';
      return state;
    case "profile":
      state.loc = 'profile';
      return state;
    case "location":
      state.loc = 'location';
      return state;
    case "community":
      state.loc = 'community';
      return state;
    default:
      // nothing
  }
  return state;
};

export default reducer;
