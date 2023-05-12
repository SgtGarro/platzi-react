import AddIcon from "../../icons/AddIcon";
import "./TodoButton.css";

function TodoButton() {
  return (
    <button className="todo-add-button" type="button">
      <AddIcon stroke="#fff" />
    </button>
  );
}

export default TodoButton;
