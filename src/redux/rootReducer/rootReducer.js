import { combineReducers } from 'redux';

import todosReducer, { initialState as todosInitialState } from '../todosReducer/todosReducer';
// import profileReducer from '../profileReducer/profileReducer';


const initialStoreState = {
  todos: todosInitialState,
  // profile: {}
};

export { initialStoreState };

export default combineReducers({
  todos: todosReducer,
  // profile: profileReducer
});