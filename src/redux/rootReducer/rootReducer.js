import { combineReducers } from "redux";
import todosReducer, {
  initialState as todosInitialState,
} from "../todosReducer/todosReducer";
import titleReducer, {
  titleInitialState as titlelState,
} from "../titleReduser/titleReducer";

const initialStoreState = {
  todos: todosInitialState,
  title: titlelState,
};

export { initialStoreState };

export default combineReducers({
  todos: todosReducer,
  title: titleReducer,
});
