import { useContext } from "react";
import { GoalContext } from "../contexts/GoalGontext";

const GoalSideBar = () => {
  const { currentGoal, setCurrentGoal } = useContext(GoalContext);

  if (currentGoal) {
    return (
      <div>
        <div>{currentGoal.title}</div>
        <div>{currentGoal.data.progress}</div>
        <div>{currentGoal.data.time}</div>
        <div>{currentGoal.data.money}</div>
      </div>
    );
  } else {
    return <div> Click some node to read the information about</div>;
  }
};

export default GoalSideBar;
