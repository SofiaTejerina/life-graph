import { Handle, Position } from "reactflow";
import { useContext } from "react";

import { GoalContext } from "../contexts/GoalGontext";
import "./baseNode.css";
import { InformationContext } from "../contexts/InformationContext";

const SimpleNode = ({ id, data, isConnectable = true }) => {
  // Get information from context
  const { setCurrentGoal } = useContext(GoalContext);
  const { selectedNodes } = useContext(InformationContext);

  return (
    <div
      className={
        selectedNodes.includes(id) ? "simple-selected-node" : "simple-node"
      }
      onClick={() => {
        setCurrentGoal({ ...data.props, id });
      }}
    >
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <div>{data.props.title}</div>
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default SimpleNode;
