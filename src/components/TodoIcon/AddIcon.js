import TodoIcon from "./TodoIcon";
function AddIcon({ stroke = "currentColor" }) {
  return <TodoIcon type="add" className="icon" stroke={stroke} />;
}

export default AddIcon;
