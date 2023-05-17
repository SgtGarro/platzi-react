import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <p className="todo-counter">
      {completedTodos} TODO{completedTodos > 1 && "s"} completados de{" "}
      {totalTodos}
    </p>
  );
}

export default TodoCounter;
