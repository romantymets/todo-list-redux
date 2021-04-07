const ROOT_PREFIX = "TOKEN/";

const tokenInitialState = {};
export { tokenInitialState };

// Actions
export const TAKE_TOKEN = `${ROOT_PREFIX}TAKE_TOKEN`;

export const takeToken = (token) => (dispatch) => {
  dispatch({
    type: TAKE_TOKEN,
    token,
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = tokenInitialState, action) => {
  switch (action.type) {
    case TAKE_TOKEN: {
      const newState = { ...action.token };
      return newState;
    }
    default:
      return state;
  }
};
