import React from "react";
import ReactDOM from "react-dom";

const el = (
  <div>
    <h1>Todo App</h1>
    <input placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById("root"));
