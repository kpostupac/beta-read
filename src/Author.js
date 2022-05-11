import "./App.css";
import React from "react";

//this is a functional component
function Author(props) {
  return (
    //these classnames are defined in App.css
    <div>
      <header>
        <p>{props.name}</p>
      </header>
    </div>
  );
}

//this is a class component
/*class Author extends React.Component {
  state = {
    name: "karen"
  };
  render() {
    return (
      <div>
        <p>Name: {this.state.name}.</p>
      </div>
    );
  }
}*/

export default Author;
