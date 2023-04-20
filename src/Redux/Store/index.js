import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import appReducers from "../Reducers";

// const middleware = applyMiddleware(thunk);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(middleware);

// const store = createStore(appReducers, enhancer);

const store = createStore(
  appReducers /* preloadedState, */,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
