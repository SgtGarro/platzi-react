import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      type="button"
      className="create-todo-button"
      onClick={function (event) {
        const btn = event.target.closest(".create-todo-button");
        console.log(btn);
      }}
    >
      <svg
        className="icon icon--add"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    </button>
  );
}

export default CreateTodoButton;
