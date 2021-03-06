const titleInitialState = "";
export { titleInitialState };

// Actions
export const CHANGE_TITLE = "changeTitle";

// Action creators
export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    title: title,
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = titleInitialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE: {
      return action.title;
    }
    default:
      return state;
  }
};
