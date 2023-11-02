import { useContext, useState } from "react";
import axios from "axios";

import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

import EditText from "../utils/EditText";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

const GoalSideBar = () => {
  // Get information from contexts
  const { currentGoal } = useContext(GoalContext);
  const { nodes, edges } = useContext(InformationContext);

  const [isSaving, setSaving] = useState(false);
  const onSave = async (nodes, edges) => {
    setSaving(true);
    if (!nodes?.loading) await client.put("/nodes", nodes);
    if (!edges?.loading) await client.put("/edges", edges);
    setSaving(false);
  };

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

  document.addEventListener("keydown", async (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      // Prevent the Save dialog to open
      e.preventDefault();

      await onSave(nodes, edges);
    }
  });

  return (
    <div>
      {isSaving && (
        <div
          style={{
            zIndex: 1000,
          }}
        >
          Saving ...
        </div>
      )}
      <button onClick={async () => await onSave(nodes, edges)}>Save</button>
      <hr></hr>
      {currentGoal
        ? goalInfo()
        : "Click some node to read the information about"}
    </div>
  );
};

export default GoalSideBar;
