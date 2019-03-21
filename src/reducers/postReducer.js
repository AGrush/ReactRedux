//this is where its going to evaluate any actions that are commited, such as fetching our posts and creating new posts, this reducer needs to be ready to take in some 'types'.
//for our actions we create what are called types which are basically just constants. Import from the actions folder here:
import { FETCH_POSTS, NEW_POST } from "../actions/types";

//this is gonna represent the posts that come in from our action and our action is where we're gonna put the fetch request
const initialState = {
  items: [],
  //the item is gonna represent the single post that we add when we get the response back
  item: {}
};

//this basically evaluates what type that we're dealing with, it takes in two things, thi initial state and the action. The action will include a type, it has to have a type and that's what we're evaluating. action.type will be one of the imports FETCH_POSTS or NEW_POST. And if it includes data it will also have a payload.
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer");
      return {
        //return the current state
        ...state,
        //add onto items the payload.. we called it payload in the postActions file
        items: action.payload
      };
    case NEW_POST:
      return {
        //return the current state
        ...state,
        //payload is going to be that single post, which we add to the state here
        item: action.payload
      };
    default:
      return state;
  }
}
