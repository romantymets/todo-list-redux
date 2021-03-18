const titleTodoInitialState = "";
export { titleTodoInitialState };

// Actions
export const CHANGE_TODOTITLE = "changeTodoTitle";

// Action creators
export const changeTodoTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TODOTITLE,
    title: title,
  });
};

// Reducer
export default (state = titleTodoInitialState, action) => {
  switch (action.type) {
    case CHANGE_TODOTITLE: {
      return action.title;
    }
    default:
      return state;
  }
};
