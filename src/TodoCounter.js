import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <p className="counter">
      Haz completado {completed} de {total} TODO
    </p>
  );
}

export default TodoCounter;
