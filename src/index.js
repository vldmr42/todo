import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink Cofee", important: false },
    { label: "Make Awesome App", important: true },
    { label: "Get a Job", important: false },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

// ReactDOM.render(App, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container);
// eslint-disable-next-line jest/require-hook
root.render(<App />);
