import { FETCH_POSTS, NEW_POST } from "./types";

//each action created is gonna be a function that we need to export
export function fetchPosts() {
  //the thunk middleware allows us to use/call the dispatch function directly so that we can make asynchronous requests
  //you can kind of think of dispatch as a resolver in a promise, whenever we wanna send the data we call dispatch just like if u were in a promise you would call resolve and pass in whatever you wanna pass in. And in this case it will be the type and the payload if there is any data that we wanna send.
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      //no longer use this.setState({ posts: data }) because that was for the component state, instead we want to dispatch the data to the reducer. Whatever data is coming in with a type to the reducer we call it payload. We're now dispatching FETCH_POSTS to the reducer (postReducer).
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
}

//the ES6 version of the above function
export const createPost = postData => dispatch => {
  console.log("action called");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    // we get back the single post from the post request, then we dispatch to the reducer NEW_POST
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
