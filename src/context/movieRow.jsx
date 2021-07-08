import React, { useContext } from "react";
import CartContext from "./cartContext";
import UserContext from "./userContext";

function MovieRow(props) {
  const userContext = useContext(UserContext); // This returns a UserContext object.
  const cartContext = useContext(CartContext);

  console.log("Cart Context", cartContext);

  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;

// useContext hook only works with functional components.
