import React from "react";

const UserContext = React.createContext(); // This returns a context object
UserContext.displayName = "UserContext"; // not necessary but a good practice

export default UserContext;

// Step - 1: Create a context object. (userContext.js)
// Step - 2: Provide this context in a top component. (App.js)
// Step - 3: Consume this context somewhere in our component tree. (movieList.jsx)
