import React, { useState, Fragment } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  // const array = useState(0); // return array with 2 elements
  // const count = array[0]; // => this.state.count value of our counter
  // const setCount = array[1]; // => this.setState({ count })

  // Using the array destructuring syntax the above code can be return as
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} clicked {count} times.
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;

// The values that we pass in the hooks are the initial values for the variables.
// Note: You cannot call hooks inside loops, conditions or nested functions.
