import { useState } from "react";
import "./App.css";
import Board from "./nodes/Board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Life graph</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Board />
    </>
  );
}

export default App;
