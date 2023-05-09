import "./App.css";
import logo from "./platzi.webp";

const App = function () {
  return (
    <div className="App">
      <TodoItem />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
};

const TodoItem = function () {
  return (
    <li>
      <span>&larr</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  );
};

export default App;
