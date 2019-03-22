//combine all of our reducers here

import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  //can have as many reducers here as you want
  posts: postReducer
});
