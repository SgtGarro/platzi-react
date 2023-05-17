import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <p className="todo-counter">
      {completedTodos} of {totalTodos} tasks completed
    </p>
  );
}

export default TodoCounter;
