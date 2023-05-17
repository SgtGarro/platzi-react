import React from "react";
import Modal from "../components/Modal";
import TodoButton from "../components/TodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoLoading from "../components/TodoLoading";
import TodoSearch from "../components/TodoSearch";
import { TodoContext } from "../context/TodoContext";

function AppUI() {
  const { loading, error, searchedTodos, toggleTodo, deleteTodo, openModal } =
    React.useContext(TodoContext);
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
              onToggle={() => toggleTodo(todo.task)}
              onDelete={() => deleteTodo(todo.task)}
            />
          ))}
        </TodoList>
      </div>
      <TodoButton />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export default AppUI;
