import CheckIcon from "../TodoIcon/CheckIcon";
import DeleteIcon from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem({ task, completed, onToggle, onDelete }) {
  return (
    <li className="todo-list-item">
      <div className="todo-check" onClick={onToggle}>
        <CheckIcon completed={completed} />
      </div>
      <p
        className={`todo-item-text ${
          completed ? "todo-item-text--completed" : ""
        }`}
      >
        {task}
      </p>
      <div className="todo-delete" onClick={onDelete}>
        <DeleteIcon />
      </div>
    </li>
  );
}

export default TodoItem;
