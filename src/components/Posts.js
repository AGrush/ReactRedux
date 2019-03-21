import React, { Component } from "react";
//connects your components to the redux store that was provided by the provider component
import { connect } from "react-redux";
// we also have an action that we want to call.. fetchPosts so we bring that in
import { fetchPosts } from "../actions/postActions";
//we add our props to proptypes
import PropTypes from "prop-types";

class Posts extends Component {
  // no longer need the below as we are fetching insite the postActions file
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     posts: []
  //   };
  // }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data => this.setState({ posts: data }));
  // }

  componentDidMount() {
    //call that action and put it into props
    this.props.fetchPosts();
  }

  //when we get a new post state & its turned into a new prop below, fire this.
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      //unshift is push but adds to front of array instead of back.
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    //state gets changed to props here after we mapStateToProps below
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h1>Posts</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>{postItems}</h1>
      </div>
    );
  }
}

//we should add our props to proptypes (not crucial)
Posts.propTypes = {
  //fetch posts function is actually a property
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

//we map the items from the state to the posts prop. Sow its accessible via this.props.posts
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

//in order to connect our components to the redux store instead of exporting the Posts component we need to export connect first. The first bracket first parameter is where we map our state to our properties. the second parameter is the fetchPosts funcion which just calls the fetch request just like we were doing in the componentDidMount,
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
