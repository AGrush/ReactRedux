import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import store from "./store";

class App extends Component {
  render() {
    return (
      //Proveder takes whats called a store and the store holds the state
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PostForm />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
