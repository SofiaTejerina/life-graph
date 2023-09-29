import "./App.css";
import GoalBoard from "./goal-board/GoalBoard";
import GoalSideBar from "./goal-dashboard/GoalSideBar";

function App() {
  return (
    <div id="root">
      <div className="left-side-component">
        <GoalSideBar />
      </div>
      <div id="board-root" className="right-side-component">
        <GoalBoard />
      </div>
    </div>
  );
}

export default App;
