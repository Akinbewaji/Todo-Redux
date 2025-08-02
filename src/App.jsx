import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>What for today ?</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
};

export default App;
