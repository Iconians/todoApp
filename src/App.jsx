import { useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
