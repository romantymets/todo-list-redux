const ROOT_PREFIX = "TODOS/";

const initialState = [];
export { initialState };

// Actions
export const ADD_TODO = `${ROOT_PREFIX}ADD_TODO`;
export const DELETE_TODO = `${ROOT_PREFIX}DELETE_TODO`;
export const CHECK_TODO = `${ROOT_PREFIX}CHECK_TODO`;
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
export const checkTodo = (id, checked) => (dispatch) => {
  dispatch({
    type: CHECK_TODO,
    preload: id,
    eventChecked: checked,
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
    case CHECK_TODO: {
      const todos = [...state];
      console.log(action);
      const currentTodo = todos.find((todo) => todo.id === action.preload);
      currentTodo.completed = action.eventChecked;
      const newTodo = todos.map((todo) =>
        todo.id === action.preload ? currentTodo : todo
      );
      return [...newTodo];
    }
    default:
      return state;
  }
};
