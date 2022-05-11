import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import AddAuthorForm from "./AddAuthorForm";
import AuthorList from "./AuthorList";

//this is a functional component
/*function App() {
  return (
    //these classnames are defined in App.css
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App(props) {
  const [authors, setAuthors] = useState(props.data);

  function addAuthor(name) {
    //I don't know what this does.
    setAuthors([...authors, name]);
  }

  return (
    <div>
      <AddAuthorForm handleSubmit={addAuthor} />
      <AuthorList data={authors} />
    </div>
  );
}

export default App;
