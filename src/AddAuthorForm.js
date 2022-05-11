import "./App.css";
import React, { useEffect, useState } from "react";

function AddAuthorForm(props) {
  //this initializes the new author object
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  //what does preventDefault do?
  function handleSubmit(e) {
    props.handleSubmit(name);
    //something is wrong with this line
    setName("");
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new author"
        onChange={handleChange}
        value={name}
      />
      <button type="submit">Add author</button>
    </form>
  );
}

export default AddAuthorForm;
