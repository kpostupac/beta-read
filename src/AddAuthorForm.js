import "./App.css";
import React, { useEffect, useState } from "react";

function AddAuthorForm() {
  //this initializes the new author object
  const [author, setAuthor] = useState("");
  function handleChange(e) {
    setAuthor(e.target.value);
  }
  //what does preventDefault do?
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new author"
        onChange={handleChange}
        value={author}
      />
      <button type="submit">Add author</button>
    </form>
  );
}

export default AddAuthorForm;
