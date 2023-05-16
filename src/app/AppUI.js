import TodoButton from "../components/TodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";

function AppUI({
  completedTodos,
  searchValue,
  setSearchValue,
  totalTodos,
  searchedTodos,
  toggleTodo,
  deleteTodo,
}) {
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

export default AppUI;
