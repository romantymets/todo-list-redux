const titleTodoInitialState = "";
export { titleTodoInitialState };

// Actions
export const CHANGE_TODOTITLE = "changeTodoTitle";

// Action creators
export const changeTodoTitle = (title, itemId) => (dispatch) => {
  dispatch({
    type: CHANGE_TODOTITLE,
    title: title,
    itemId,
  });
};

// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = titleTodoInitialState, action) => {
  switch (action.type) {
    case CHANGE_TODOTITLE: {
      const { itemId, title } = action;
      return {
        ...state,
        [itemId]: title,
      };
    }
    default:
      return state;
  }
};
