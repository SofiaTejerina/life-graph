import { useCallback, useContext, useState } from "react";
import axios from "axios";

import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

import EditText from "../utils/EditText";
import GoalInformation from "./GoalInformation";

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

  const updateSimpleNodeData = (goal) => {
    return ({ newTitle, newData }) => {
      if (nodes?.loading || !goal) return;
      setNodes((nds) => {
        return nds.map((node) => {
          if (node.id === goal.id) {
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
  };

  const updateGroupNodeData = (groupNodeId, goal) => {
    return ({ newTitle, newData }) => {
      if (nodes?.loading || !goal) return;
      setNodes((nds) => {
        return nds.map((node) => {
          if (node.id === groupNodeId) {
            node.data.props.data.map((n) => {
              if (n.id === goal.id) {
                n.data.props = {
                  data: newData,
                  title: newTitle,
                };
                // update the current node in order tu vizualize the right data
                setCurrentGoal({ ...node.data.props, id: node.id });
              }
            });
            console.log(JSON.stringify(node));
          }
          return node;
        });
      });
    };
  };

  const returnGoalInfo = () => {
    if (currentGoal.type === "groupNode") {
      return (
        <div>
          {currentGoal.props.data.map((n) => {
            const goal = { ...n.data.props, id: n.id };
            return (
              <div key={n.id}>
                <GoalInformation
                  goal={goal}
                  onSaveAction={updateGroupNodeData(currentGoal.id, goal)}
                />
                <hr />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <GoalInformation
          goal={currentGoal}
          onSaveAction={updateSimpleNodeData(currentGoal)}
        />
      );
    }
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
        ? returnGoalInfo()
        : "Click some node to read the information about"}
    </div>
  );
};

export default GoalSideBar;
