import React from "react";
import { TodoContext } from "../../context/TodoContext";
import SearchIcon from "../TodoIcon/SearchIcon";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="todo-search">
      <input
        className="todo-search-input"
        type="text"
        placeholder="Picar cebollas"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <div className="todo-search-icon">
        <SearchIcon />
      </div>
    </div>
  );
}

export default TodoSearch;
