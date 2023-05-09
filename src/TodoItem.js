function TodoItem({ text, completed }) {
  return (
    <li>
      <span>&larr;</span>
      <p>{text}</p>
      <p>Completed: {completed}</p>
      <span>X</span>
    </li>
  );
}

export default TodoItem;
