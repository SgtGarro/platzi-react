import TodoButton from "../components/TodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoLoading from "../components/TodoLoading";
import TodoSearch from "../components/TodoSearch";

function AppUI({
  completedTodos,
  searchValue,
  setSearchValue,
  totalTodos,
  searchedTodos,
  toggleTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <div className="container">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch value={searchValue} setValue={setSearchValue} />
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
    </>
  );
}

export default AppUI;
