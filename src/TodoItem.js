import "./TodoItem.css";

function TodoItem({ text, completed }) {
  return (
    <li className="todo-item">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`icon icon--check ${completed ? "icon--completed" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <p
        className={`todo-item-text ${
          completed ? "todo-item-text--completed" : ""
        }`}
      >
        {text}
      </p>
      <div className="todo-item-close">
        <svg
          className="icon icon--close"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </li>
  );
}

export default TodoItem;
