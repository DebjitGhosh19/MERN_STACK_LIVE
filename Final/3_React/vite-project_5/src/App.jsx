import "./App.css";

import React, { Component } from "react";
import HomePage from "./HomePage";
import Login from "./Login";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    return this.state.isLogin ? <HomePage /> : <Login />;
  }
}
