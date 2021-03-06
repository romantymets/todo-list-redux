const ROOT_PREFIX = "LIST/";
const TODO_PREFIX = "TODO/";

const listItemsInitialState = {};
export { listItemsInitialState };

// Actions
export const ADD_NEWLIST = `${ROOT_PREFIX}ADD_NEWLIST`;
export const DELETE_LIST = `${ROOT_PREFIX}DELETE_LIST`;
export const ADD_TODO = `${TODO_PREFIX}ADD_TODO`;
export const DELETE_TODO = `${TODO_PREFIX}DELETE_TODO`;
export const CHECK_TODO = `${TODO_PREFIX}CHECK_TODO`;
export const ONDRAG_END = `${TODO_PREFIX}ONDRAG_END`;
export const TODOITEM_CHANGE = `${TODO_PREFIX}TODOITEM_CHANGE`;

export const addNewList = (list) => (dispatch) => {
  dispatch({
    type: ADD_NEWLIST,
    list: list,
  });
};

export const dragEnd = (result, colums) => (dispatch) => {
  dispatch({
    type: ONDRAG_END,
    result,
    colums,
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
export const todoItemChange = (listId, todoId, changedTitle) => (dispatch) => {
  dispatch({
    type: TODOITEM_CHANGE,
    listId,
    todoId,
    changedTitle,
  });
};
// Reducer
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = listItemsInitialState, action) => {
  switch (action.type) {
    case ADD_NEWLIST: {
      return { ...state, ...action.list };
    }
    case DELETE_LIST: {
      const newState = delete state[action.id];
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
    case ONDRAG_END: {
      const { result, colums } = action;
      const { source, destination } = result;
      if (source.droppableId !== destination.droppableId) {
        const sourseColums = colums[source.droppableId];
        const destColums = colums[destination.droppableId];
        const sourseItem = [...sourseColums.todos];
        const destItem = [...destColums.todos];
        const [removed] = sourseItem.splice(source.index, 1);
        destItem.splice(destination.index, 0, removed);
        const newState = {
          ...colums,
          [source.droppableId]: {
            ...sourseColums,
            todos: sourseItem,
          },
          [destination.droppableId]: {
            ...destColums,
            todos: destItem,
          },
        };
        return newState;
      } else {
        const column = colums[source.droppableId];
        const copiedItem = [...column.todos];
        const [removed] = copiedItem.splice(source.index, 1);
        copiedItem.splice(destination.index, 0, removed);
        const newState = {
          ...colums,
          [source.droppableId]: {
            ...column,
            todos: copiedItem,
          },
        };
        return newState;
      }
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
    case TODOITEM_CHANGE: {
      const { listId, todoId, changedTitle } = action;
      if (!listId || !todoId || !changedTitle) {
        return state;
      } else {
        const oldItemList = state[listId];
        const currentTodo = oldItemList.todos.find(
          (todo) => todo.id === todoId
        );
        currentTodo.title = changedTitle;
        const newTodo = oldItemList.todos.map((todo) =>
          todo.id === todoId ? currentTodo : todo
        );
        const newItem = {
          ...oldItemList,
          todos: [...newTodo],
        };
        return {
          ...state,
          [listId]: newItem,
        };
      }
    }
    default:
      return state;
  }
};
