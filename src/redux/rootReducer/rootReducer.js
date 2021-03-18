import { combineReducers } from "redux";
import todosReducer, {
  initialState as todosInitialState,
} from "../todosReducer/todosReducer";
import titleReducer, {
  titleInitialState as titlelState,
} from "../titleReduser/titleReducer";
import ListItemReducer, {
  listItemsInitialState as listItemsState,
} from "../ListItemsReducer/ListItemReducer";
import titleTodoReducer, {
  titleTodoInitialState as titleTodoState,
} from "../titleReduser/titleTodoReducer";

const initialStoreState = {
  todos: todosInitialState,
  title: titlelState,
  listItems: listItemsState,
  titleTodo: titleTodoState,
};

export { initialStoreState };

export default combineReducers({
  todos: todosReducer,
  title: titleReducer,
  listItems: ListItemReducer,
  titleTodo: titleTodoReducer,
});
