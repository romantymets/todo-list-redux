const ROOT_PREFIX = 'TODOS/';

const initialState = [];
export { initialState };

// Actions
export const ADD_TODO = `${ROOT_PREFIX}ADD_TODO`;

// Action creators
export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    todo:todo
  });
};

// Reducer
export default (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        action.todo,
      ];
    }
    default:
      return state;
  }
};
