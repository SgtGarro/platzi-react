import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = function (event) {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = function () {
    setOpenModal(false);
  };

  const onChange = function (event) {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label className="todo-form-label" htmlFor="">
        Escribe tu nuevo TODO
      </label>
      <textarea
        name="todo"
        className="todo-form-input"
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="todo-form-btns">
        <button
          type="button"
          className="todo-form-btn todo-form-btn--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="todo-form-btn todo-form-btn--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
