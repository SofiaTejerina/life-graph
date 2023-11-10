import { useContext } from "react";

import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";

import EditText from "../utils/EditText";
import GoalInformation from "./GoalInformation";

const GoalSideBar = () => {
  // Get information from contexts
  const { currentGoal, setCurrentGoal } = useContext(GoalContext);
  const { nodes, edges, setNodes } = useContext(InformationContext);

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
            setCurrentGoal({
              ...node.data.props,
              id: node.id,
              type: node.type,
            });
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
                setCurrentGoal({ ...node.data, id: node.id, type: node.type });
              }
            });
          }
          return node;
        });
      });
    };
  };

  const updateGroupNodeTitle = (newTitle, nodeId) => {
    if (nodes?.loading) return;
    setNodes((nds) => {
      return nds.map((node) => {
        if (node.id === nodeId) {
          node.data.props = {
            ...node.data.props,
            title: newTitle,
          };
          setCurrentGoal({ ...node.data, id: node.id, type: node.type });
        }
        return node;
      });
    });
  };

  const returnGoalInfo = () => {
    if (currentGoal.type === "groupNode") {
      return (
        <div>
          <EditText
            name={"gorupTitle"}
            placeholder="Group node title"
            value={currentGoal.props.title}
            onSave={({ value }) => {
              updateGroupNodeTitle(value, currentGoal.id);
            }}
          />
          <hr />
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

  return (
    <div>
      <hr></hr>
      {currentGoal
        ? returnGoalInfo()
        : "Click some node to read the information about"}
    </div>
  );
};

export default GoalSideBar;
