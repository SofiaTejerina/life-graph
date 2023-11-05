import { useCallback, useContext, useState } from "react";
import axios from "axios";

import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

import EditText from "../utils/EditText";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

const GoalSideBar = () => {
  // Get information from contexts
  const { currentGoal, setCurrentGoal } = useContext(GoalContext);
  const { nodes, edges, setNodes } = useContext(InformationContext);

  const [isSaving, setSaving] = useState(false);
  const onSave = async (nodes, edges) => {
    setSaving(true);
    if (!nodes?.loading) await client.put("/nodes", nodes);
    if (!edges?.loading) await client.put("/edges", edges);
    setSaving(false);
  };

  // Edit node data
  const updateNodeData = ({ newTitle, newData }) => {
    if (nodes?.loading || !currentGoal) return;
    setNodes((nds) => {
      return nds.map((node) => {
        if (node.id === currentGoal.id) {
          node.data.props = {
            data: newData,
            title: newTitle,
          };
          // update the current node in order tu vizualize the right data
          setCurrentGoal({ ...node.data.props, id: node.id });
        }
        return node;
      });
    });
  };

  const goalInfo = () => {
    return (
      <div>
        <EditText
          name={"title"}
          placeholder="Goal name"
          value={currentGoal.title}
          onSave={({ value }) => {
            updateNodeData({ newData: currentGoal.data, newTitle: value });
          }}
        />
        <EditText
          name={"progress"}
          placeholder="Goal progress"
          value={currentGoal.data.progress}
          onSave={({ value }) => {
            updateNodeData({
              newData: { ...currentGoal.data, progress: value },
              newTitle: currentGoal.title,
            });
          }}
        />
        <EditText
          name={"time"}
          placeholder="Goal time"
          value={currentGoal.data.time}
          onSave={({ value }) => {
            updateNodeData({
              newData: { ...currentGoal.data, time: value },
              newTitle: currentGoal.title,
            });
          }}
        />
        <EditText
          name={"money"}
          placeholder="Goal money"
          value={currentGoal.data.money}
          onSave={({ value }) => {
            updateNodeData({
              newData: { ...currentGoal.data, money: value },
              newTitle: currentGoal.title,
            });
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
