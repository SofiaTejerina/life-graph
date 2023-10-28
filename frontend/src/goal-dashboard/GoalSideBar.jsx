import { useContext } from "react";
import axios from "axios";

import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

import "./goalSideBar.css";

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

  const goalInfo = () => {
    return (
      <div>
        <div
          className="block right-float"
          onClick={() => {
            console.log("Editar");
          }}
        >
          Editar
        </div>
        <div>{currentGoal.title}</div>
        <div>{currentGoal.data.progress}</div>
        <div>{currentGoal.data.time}</div>
        <div>{currentGoal.data.money}</div>
      </div>
    );
  };

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      // Prevent the Save dialog to open
      e.preventDefault();

      onSave(nodes, edges);
    }
  });

  return (
    <div>
      <button onClick={() => onSave(nodes, edges)}>Save</button>
      <hr></hr>
      {currentGoal
        ? goalInfo()
        : "Click some node to read the information about"}
    </div>
  );
};

export default GoalSideBar;
