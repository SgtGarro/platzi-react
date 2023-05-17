import React from "react";
import { TodoContext } from "../../context/TodoContext";
import AddIcon from "../TodoIcon/AddIcon";
import "./TodoButton.css";

function TodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="todo-add-button"
      type="button"
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      <AddIcon stroke="#fff" />
    </button>
  );
}

export default TodoButton;
