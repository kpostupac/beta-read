import "./App.css";
import React from "react";
import Author from "./Author";

//this is a functional component
function AuthorList(props) {
  const arr = props.data;
  console.log(arr);
  const items = arr.map(val => <Author name={val} />);
  return <ul>{items}</ul>;
}

export default AuthorList;
