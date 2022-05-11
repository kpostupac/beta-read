import "./App.css";
import React from "react";
import Author from "./Author";

//this is a functional component
function AuthorList(props) {
  const list = props.data;
  const items = list.map(val => <Author name={val} />);
  return <ul>{items}</ul>;
}

export default AuthorList;
