import React, { Component } from "react";
import MoviePage from "./context/moviePage";
import UserContext from "./context/userContext";
import Login from "./context/login";
import "./App.css";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "Vivek" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
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
