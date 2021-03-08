import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer, { initialStoreState } from "./rootReducer/rootReducer";

let enhancers = [];
let middleware = [thunk];
/**
 * Redux' composed enhancers and middleware
 */
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

/**
 * Redux store
 */
const store = createStore(
  rootReducer,
  initialStoreState,
  composeWithDevTools(applyMiddleware(...middleware), composedEnhancers)
);

export default store;
