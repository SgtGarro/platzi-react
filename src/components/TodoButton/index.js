import AddIcon from "../TodoIcon/AddIcon";
import "./TodoButton.css";

function TodoButton() {
  return (
    <button className="todo-add-button" type="button">
      <AddIcon stroke="#fff" />
    </button>
  );
}

export default TodoButton;
