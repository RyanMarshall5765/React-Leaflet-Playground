import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Places from "../containers/Places";
import Home from "../containers/Home";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/Places">Places</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/places" component={Places} />
        </main>
      </div>
    );
  }
}

export default App;
