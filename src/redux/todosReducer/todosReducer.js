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
export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    preload: id,
  });
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.todo];
    }
    case DELETE_TODO: {
      const todos = [...state];
      const newTodo = todos.filter((todo) => todo.id !== action.preload);
      return [...newTodo];
    }
    default:
      return state;
  }
};
