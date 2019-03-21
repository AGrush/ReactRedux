//this holds the whole state tree of the application, the only way to trigger a change of state inside here is to dispatch an action to it. A store is not a class, its just an object with some methods in it.

import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

//createStore(root reducer, [preloadedState], [enhancer])
//root reducer: combine separate state reducers into this rootreducer and pass it to the store
//preloadedState: initial state
//:enhancer: optional 3d party plugins
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
