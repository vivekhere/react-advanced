import React from "react";
import withTooltip from "./withTooltip";

class Movie extends React.Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some Tooltip</div>}
      </div>
    );
  }
}

export default withTooltip(Movie);

// We want to implement the tooltip functionality in this component. But we
// will implement that functionality in a higher order component not here.

// Here we are conditionally rendering the tooltip that we get from the hoc.
