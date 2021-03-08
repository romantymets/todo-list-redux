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
    id: id,
  });
};
export const checkTodo = (id, checked) => (dispatch) => {
  dispatch({
    type: CHECK_TODO,
    id: id,
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
      const newTodo = state.filter((todo) => todo.id !== action.id);
      return [...newTodo];
    }
    case CHECK_TODO: {
      console.log(action);
      const currentTodo = state.find((todo) => todo.id === action.id);
      currentTodo.completed = action.eventChecked;
      const newTodo = state.map((todo) =>
        todo.id === action.id ? currentTodo : todo
      );
      return [...newTodo];
    }
    default:
      return state;
  }
};
