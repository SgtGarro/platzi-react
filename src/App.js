import "./App.css";

import CreateTodoButton from "./CreateTodoButton";
import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: true,
  },
  {
    text: "Limpiar el cuarto",
    completed: false,
  },
  {
    text: "Lavarse el cabello",
    completed: false,
  },
  {
    text: "Hacer la tarea",
    completed: true,
  },
  {
    text: "Cocinar",
    completed: false,
  },
];

function App() {
  return (
    <div className="container">
      <TodoCounter completed={13} total={20} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}
export default App;
