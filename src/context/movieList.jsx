import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div>Movie List {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

// Another way of setting the contextType property outside the class.
// MovieList.contextType = UserContext;

export default MovieList;

// Wrap the div element inside the consumer component.
// This component expects a function as a child otherwise we will get an error.
// The function takes an argument. You can call it anything.

// Let's say we want to consume this context outside the render method in the
// componentDidMount() lifecycle hook. In this method we don't have access to the
// consumer component. Inorder to use the context we need to set one of the static
// properties of the class called 'contextType'.
