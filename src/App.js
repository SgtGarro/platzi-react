import React from "react";

import TodoButton from "./components/TodoButton/TodoButton";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";

// const defaultTodos = [
//   { id: 0, task: "Lavar los platos", completed: true },
//   { id: 1, task: "Asear el cuarto", completed: true },
//   { id: 2, task: "Lavar la ropa", completed: false },
//   { id: 3, task: "Limpiar el cuarto", completed: true },
//   { id: 4, task: "Pintar la casa", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
const useLocalStorage = function (itemName, initialValue) {
  const todosFromStorage = localStorage.getItem(itemName);

  let parsedItem;
  if (!todosFromStorage) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }
  parsedItem = JSON.parse(todosFromStorage);

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = function (newItem) {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};

function App() {
  const [todos, setTodos] = useLocalStorage("TODOS_V1", []);
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
    <>
      <div className="container">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch value={searchValue} setValue={setSearchValue} />
        <TodoList>
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
    </>
  );
}

export default App;
