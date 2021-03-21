const ROOT_PREFIX = "LIST/";

const listItemsInitialState = {};
export { listItemsInitialState };

// Actions
export const ADD_NEWLIST = `${ROOT_PREFIX}ADD_NEWLIST`;
export const DELETE_LIST = `${ROOT_PREFIX}DELETE_LIST`;
export const ADD_TODO = `${ROOT_PREFIX}ADD_TODO`;
export const DELETE_TODO = `${ROOT_PREFIX}DELETE_TODO`;
export const CHECK_TODO = `${ROOT_PREFIX}CHECK_TODO`;
export const addNewList = (list) => (dispatch) => {
  dispatch({
    type: ADD_NEWLIST,
    list: list,
  });
};

export const deleteList = (id) => (dispatch) => {
  dispatch({
    type: DELETE_LIST,
    id: id,
  });
};
export const addTodo = (todo, itemId) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    todo,
    itemId,
  });
};
export const deleteTodo = (todoId, itemId) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    todoId,
    itemId,
  });
};
export const checkTodo = (todoId, itemId, completed) => (dispatch) => {
  dispatch({
    type: CHECK_TODO,
    todoId,
    itemId,
    completed,
  });
};
// Reducer
export default (state = listItemsInitialState, action) => {
  switch (action.type) {
    case ADD_NEWLIST: {
      return { ...state, ...action.list };
    }
    case DELETE_LIST: {
      const findIdState = Object.keys(state).filter((id) => id === action.id);
      findIdState.toString();
      const newState = delete state[findIdState];
      return { ...state, ...newState };
    }
    case ADD_TODO: {
      const { todo, itemId } = action;
      const oldItem = state[itemId];
      const newItem = {
        ...oldItem,
        todos: [...oldItem.todos, todo],
      };
      return {
        ...state,
        [itemId]: newItem,
      };
    }
    case DELETE_TODO: {
      const { todoId, itemId } = action;
      const oldItem = state[itemId];
      const newTodos = oldItem.todos.filter((todo) => todo.id !== todoId);
      const newItem = {
        ...oldItem,
        todos: [...newTodos],
      };
      return {
        ...state,
        [itemId]: newItem,
      };
    }
    case CHECK_TODO: {
      const { todoId, itemId, completed } = action;
      const oldItem = state[itemId];
      // eslint-disable-next-line no-debugger
      debugger;
      const currentTodo = oldItem.todos.find((todo) => todo.id === todoId);
      currentTodo.completed = completed;
      const newTodo = oldItem.todos.map((todo) =>
        todo.id === todoId ? currentTodo : todo
      );
      const newItem = {
        ...oldItem,
        todos: [...newTodo],
      };
      return {
        ...state,
        [itemId]: newItem,
      };
    }
    default:
      return state;
  }
};
