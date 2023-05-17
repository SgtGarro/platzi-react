import React from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import AppUI from "./AppUI";

function App() {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  // Derivated states
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = function (newTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const toggleTodo = function (id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;

    saveTodos(newTodos);
  };
  const deleteTodo = function (id) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);

    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  // Searched tasks
  const searchedTodos = todos.filter((todo) => {
    const todoTask = todo.task.toLowerCase();
    return todoTask.includes(searchValue.toLowerCase());
  });

  return (
    <AppUI
      completedTodos={completedTodos}
      deleteTodo={deleteTodo}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      toggleTodo={toggleTodo}
      totalTodos={totalTodos}
      loading={loading}
      error={error}
    ></AppUI>
  );
}

export default App;
