import React, { Component } from "react";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import store from "../store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <h1> Banner Here </h1>
          </header>
          <NavBar />
        </div>
      </Provider>
    );
  }
}

export default App;
