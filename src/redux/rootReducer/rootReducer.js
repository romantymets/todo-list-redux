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
import RegistrationReducer, {
  tokenInitialState as tokenState,
} from "../registrationReduser/RegistrationReducer";

const initialStoreState = {
  title: titlelState,
  listItems: listItemsState,
  titleTodo: titleTodoState,
  token: tokenState,
};

export { initialStoreState };

export default combineReducers({
  title: titleReducer,
  listItems: ListItemReducer,
  titleTodo: titleTodoReducer,
  tokenState: RegistrationReducer,
});
