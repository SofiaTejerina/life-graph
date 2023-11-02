import { useCallback, useContext, useEffect } from "react";
import axios from "axios";

import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

import EditText from "../utils/EditText";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

const onSave = (nodes, edges) => {
  client.put("/edges", edges);
  client.put("/nodes", nodes);
};

const GoalSideBar = () => {
  // Get information from contexts
  const { currentGoal } = useContext(GoalContext);
  const { nodes, edges, setNodes } = useContext(InformationContext);

  const goalInfo = () => {
    return (
      <div>
        <EditText
          name={"title"}
          placeholder="Goal name"
          value={currentGoal.title}
          onSave={() => {
            console.log("Guardando input");
          }}
        />
        <EditText
          name={"progress"}
          placeholder="Goal progress"
          value={currentGoal.data.progress}
          onSave={() => {
            console.log("Guardando input");
          }}
        />
        <EditText
          name={"time"}
          placeholder="Goal time"
          value={currentGoal.data.time}
          onSave={() => {
            console.log("Guardando input");
          }}
        />
        <EditText
          name={"money"}
          placeholder="Goal money"
          value={currentGoal.data.money}
          onSave={() => {
            console.log("Guardando input");
          }}
        />
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
