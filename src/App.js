import React, { Component } from "react";
import MoviePage from "./context/moviePage";
import UserContext from "./context/userContext";
import "./App.css";

class App extends Component {
  state = { currentUser: { name: "Vivek" } };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;

// Wrap the div element inside the Provider component.
// This provider component is just like a regular react component. It has a
// special prop called value and this is where we will pass an object down our
// component tree.
