import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Author from "./Author";
import AddAuthorForm from "./AddAuthorForm";
import AuthorList from "./AuthorList";
import reportWebVitals from "./reportWebVitals";

const contacts = ["Karen Postupac", "Sarah Postupac", "Cody Postupac"];

ReactDOM.render(
  <React.StrictMode>
    <AddAuthorForm />
    <AuthorList data={contacts} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
