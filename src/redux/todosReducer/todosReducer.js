const ROOT_PREFIX = "TODOS/";

const initialState = [];
export { initialState };

// Actions
export const ADD_TODO = `${ROOT_PREFIX}ADD_TODO`;
export const DELETE_TODO = `${ROOT_PREFIX}DELETE_TODO`;
// Action creators
export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    todo: todo,
  });
};
export const deleteTodo = (newtodos) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    preload: newtodos,
  });
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.todo];
    }
    case DELETE_TODO: {
      return (state = [...action.preload]);
    }
    default:
      return state;
  }
};
