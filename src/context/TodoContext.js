import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  // Derivated states
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const saveTodos = function (newTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const toggleTodo = function (task) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.task === task);
    todo.completed = !todo.completed;

    saveTodos(newTodos);
  };
  const deleteTodo = function (task) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.task === task);

    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };
  const addTodo = function (task) {
    const newTodos = [...todos];
    newTodos.push({ task, completed: false });
    saveTodos(newTodos);
  };

  // Searched tasks
  const searchedTodos = todos.filter((todo) => {
    const todoTask = todo.task.toLowerCase();
    return todoTask.includes(searchValue.toLowerCase());
  });

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        searchValue,
        setSearchValue,
        totalTodos,
        searchedTodos,
        toggleTodo,
        deleteTodo,
        addTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
