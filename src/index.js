import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink Cofee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Get a Job", important: false, id: 3 },
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
