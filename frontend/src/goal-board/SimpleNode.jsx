import { Handle, Position } from "reactflow";
import "./baseNode.css";
import { useContext } from "react";
import { GoalContext } from "../contexts/GoalGontext";

const SimpleNode = ({
  data = { title: "No funciono" },
  isConnectable = true,
}) => {
  const { setCurrentGoal } = useContext(GoalContext);

  return (
    <div className="simple-node" onClick={() => setCurrentGoal(data.props)}>
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
