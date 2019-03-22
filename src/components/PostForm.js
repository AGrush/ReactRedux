import React, { Component } from "react";
//whenever you have component properties you should put them inside of prop types,  which is a form of validation for the type of the prop.
import PropTypes from "prop-types";
//connect allows us to get state from redux into a react component, when we use connect we have to export default connect(mapStateToProps, {any actions we wanna use})(Original Class)
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //where we put out fetch before we now put our action
    //call action
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

//whenever you have component properties you should put them inside of prop types,  which is a form of validation for the type of the prop. We also add isRequired.
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
