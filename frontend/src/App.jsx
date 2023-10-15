import { useState } from "react";
import "./App.css";
import GoalBoard from "./goal-board/GoalBoard";
import GoalSideBar from "./goal-dashboard/GoalSideBar";
import { GoalContext } from "./contexts/GoalGontext";

function App() {
  const [currentGoal, setCurrentGoal] = useState();

  return (
    <GoalContext.Provider value={{ currentGoal, setCurrentGoal }}>
      <div id="root">
        <div className="left-side-component">
          <GoalSideBar />
        </div>
        <div id="board-root" className="right-side-component">
          <GoalBoard />
        </div>
      </div>
    </GoalContext.Provider>
  );
}

export default App;
