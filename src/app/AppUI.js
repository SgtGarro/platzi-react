import React from "react";
import Modal from "../components/Modal";
import TodoButton from "../components/TodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoLoading from "../components/TodoLoading";
import TodoSearch from "../components/TodoSearch";
import { TodoContext } from "../context/TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <div className="container">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {loading && <TodoLoading />}
          {error && <p>Hubo un error!!!</p>}
          {!loading && searchedTodos.length === 0 && (
            <p>Crea tu primer TODO!!!</p>
          )}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </TodoList>
      </div>
      <TodoButton />
      {openModal && <Modal>La funcionalidad de agregar TODOs</Modal>}
    </>
  );
}

export default AppUI;
