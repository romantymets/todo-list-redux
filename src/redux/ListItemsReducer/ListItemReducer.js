const ROOT_PREFIX = "LIST/";

const listItemsInitialState = {};
export { listItemsInitialState };

// Actions
export const ADD_NEWLIST = `${ROOT_PREFIX}ADD_NEWLIST`;
export const DELETE_LIST = `${ROOT_PREFIX}DELETE_LIST`;

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
    default:
      return state;
  }
};
