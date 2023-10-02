import { useContext } from "react";
import { GoalContext } from "../contexts/GoalGontext";

const GoalSideBar = () => {
  const { currentGoal, setCurrentGoal } = useContext(GoalContext);

  if (currentGoal) {
    return (
      <div>
        <div>{currentGoal.data.props.title}</div>
        <div>{currentGoal.data.props.data.progress}</div>
        <div>{currentGoal.data.props.data.time}</div>
        <div>{currentGoal.data.props.data.money}</div>
      </div>
    );
  } else {
    return <div> Click some node to read the information about</div>;
  }
};

export default GoalSideBar;
