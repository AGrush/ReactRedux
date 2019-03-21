//combine all of ou reducers here

import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  posts: postReducer
});
