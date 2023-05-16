import TodoIcon from "./TodoIcon";

function CheckIcon({ completed }) {
  return (
    <TodoIcon
      type="check"
      className={`icon icon--check ${completed ? "icon--green" : ""}`}
    />
  );
}

export default CheckIcon;
