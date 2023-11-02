import { Handle, Position } from "reactflow";
import { useContext } from "react";

import { GoalContext } from "../contexts/GoalGontext";
import "./baseNode.css";

const SimpleNode = ({
  id,
  data = { title: "No funciono" },
  isConnectable = true,
}) => {
  // Get information from context
  const { setCurrentGoal } = useContext(GoalContext);

  return (
    <div
      className="simple-node"
      onClick={() => {
        setCurrentGoal({ id: id, ...data.props });
        console.log(`El nodo que se selecciono tiene el Id: ${id}`);
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
