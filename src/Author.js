import "./App.css";
import React from "react";

//this is a functional component
/*function Author(props) {
  return (
    //these classnames are defined in App.css
    <div>
      <header>
        <p>{props.name}</p>
      </header>
    </div>
  );
}*/

class Author extends React.Component {
  state = {
    name: "karen"
  };
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>Her age is {this.props.age}</p>
      </div>
    );
  }
}

export default Author;
