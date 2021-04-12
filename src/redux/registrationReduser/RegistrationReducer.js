const ROOT_PREFIX = "TOKEN/";

const tokenInitialState = { token: "", user: null };
export { tokenInitialState };

// Actions
export const SET_TOKEN = `${ROOT_PREFIX}SET_TOKEN`;
export const SET_USER = `${ROOT_PREFIX}SET_USER`;

export const setToken = (token) => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    token,
  });
};
export const setUser = (user) => (dispatch) => {
  dispatch({
    type: SET_USER,
    user,
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = tokenInitialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return { ...state, token: action.token };
    }
    case SET_USER: {
      return { ...state, user: action.user };
    }
    default:
      return state;
  }
};
