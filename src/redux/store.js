import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer, { initialStoreState } from './rootReducer/rootReducer';

let enhancers = [];
let middleware = [thunk];

const REDUX_DEV_MODE =  true;

/** local configurations of the file */
const config = {
  withDevTools: false,
  withLogger: true,
};

/**
 * Add development middlewares and enhancers
 */
if (REDUX_DEV_MODE) {
  // const { composeWithDevTools } = require('redux-devtools-extension');
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function' && config.withDevTools) {
    enhancers = enhancers.concat(devToolsExtension());
  }
  if (config.withLogger) {
    const { logger } = require('redux-logger');
    middleware = middleware.concat(logger);
  }
}

/**
 * Redux' composed enhancers and middleware
 */
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

/**
 * Redux store
 */
const store = createStore(rootReducer, initialStoreState, composedEnhancers);

export default store;
