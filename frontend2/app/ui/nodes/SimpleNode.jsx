import { Handle, Position } from "reactflow";
import { useContext } from "react";

import { GoalContext } from "../../lib/contexts/GoalGontext";
import { InformationContext } from "../../lib/contexts/InformationContext";

import baseNodeStyles from "../styles/baseNode.module.css";

const SimpleNode = ({ id, type, data, isConnectable = true }) => {
  // Get information from context
  const { setCurrentGoal } = useContext(GoalContext);
  const { selectedNodes } = useContext(InformationContext);

  return (
    <div
      className={
        selectedNodes.includes(id)
          ? baseNodeStyles.simple_selected_node
          : baseNodeStyles.simple_node
      }
      onClick={() => {
        setCurrentGoal({ ...data.props, id, type });
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
