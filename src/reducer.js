// initial state of app
export const initialState = { user: null };

// list of actions
export const actionTypes = {
  SET_USER: "SET_USER",
};

// action handler
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

// exports
export default reducer;
