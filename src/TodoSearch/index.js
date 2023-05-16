import SearchIcon from "../icons/SearchIcon";
import "./TodoSearch.css";

function TodoSearch({ value, setValue }) {
  return (
    <div className="todo-search">
      <input
        className="todo-search-input"
        type="text"
        placeholder="Picar cebollas"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <div className="todo-search-icon">
        <SearchIcon />
      </div>
    </div>
  );
}

export default TodoSearch;
