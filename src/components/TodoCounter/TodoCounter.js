import "./TodoCounter.css";
function TodoCounter({ completed, total }) {
  return (
    <p className="todo-counter">
      {completed} of {total} tasks completed
    </p>
  );
}

export default TodoCounter;
