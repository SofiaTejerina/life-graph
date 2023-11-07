import { Handle, Position } from "reactflow";
import { useContext } from "react";

import { GoalContext } from "../contexts/GoalGontext";
import "./baseNode.css";

const SimpleNode = ({ id, data, isConnectable = true }) => {
  // Get information from context
  const { setCurrentGoal } = useContext(GoalContext);

  return (
    <div
      className="simple-node"
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
