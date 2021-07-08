import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const currentUser = useContext(UserContext); // This returns a UserContext object.
  console.log("context", currentUser);

  return <div>{currentUser.name}</div>;
}

export default MovieRow;

// useContext hook only works with functional components.
