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
          <br />
          <Link to="/people">People</Link>
          <br />
          <Link to="/places">Places</Link>
          <br />
          <Link to="/chattels">Chattels</Link>
          <br />
          <Link to="/essays">Essays</Link>
          <br />
          <Link to="/analytics">Analytics</Link>
          <br />
          <Link to="/resources">Resources</Link>
          <br />
          <Link to="/about">About</Link>
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
