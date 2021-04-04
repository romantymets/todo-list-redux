import { combineReducers } from "redux";
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
  title: titlelState,
  listItems: listItemsState,
  titleTodo: titleTodoState,
};

export { initialStoreState };

export default combineReducers({
  title: titleReducer,
  listItems: ListItemReducer,
  titleTodo: titleTodoReducer,
});
