import { useContext } from "react";
import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";
import axios from "axios";

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

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

const onSave = (nodes, edges) => {
  client.put("/edges", edges);
  client.put("/nodes", nodes);
};

const GoalSideBar = () => {
  const { currentGoal } = useContext(GoalContext);
  const { nodes, edges } = useContext(InformationContext);

  return (
    <div>
      <button onClick={() => onSave(nodes, edges)}>Safe</button>
      <br></br>
      {currentGoal
        ? goalInfo(currentGoal)
        : "Click some node to read the information about"}
    </div>
  );
};

export default GoalSideBar;
