import { useContext } from "react";
import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

const goalInfo = (currentGoal) => {
  return (
    <>
      <div>{currentGoal.title}</div>
      <div>{currentGoal.data.progress}</div>
      <div>{currentGoal.data.time}</div>
      <div>{currentGoal.data.money}</div>
    </>
  );
};

const onSafe = (goals, edges) => {
  console.log(goals);
  console.log(edges);
};

const GoalSideBar = () => {
  const { currentGoal } = useContext(GoalContext);
  const { nodes, edges } = useContext(InformationContext);

  return (
    <div>
      <button onClick={() => onSafe(nodes, edges)}>Safe</button>
      <br></br>
      {currentGoal
        ? goalInfo(currentGoal)
        : "Click some node to read the information about"}
    </div>
  );
};

export default GoalSideBar;
