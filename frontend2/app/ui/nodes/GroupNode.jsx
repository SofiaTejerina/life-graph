import { Handle, Position } from "reactflow";
import SimpleNode from "./SimpleNode";
import { GoalContext } from "../../lib/contexts/GoalGontext";
import { useContext } from "react";
import { InformationContext } from "../../lib/contexts/InformationContext";

import baseNodeStyles from "../styles/baseNode.module.css";

const GroupNode = ({
  id,
  data = { title: "No funciono" },
  type,
  isConnectable = true,
}) => {
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
        setCurrentGoal({ ...data, id, type });
      }}
    >
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <p>{data.props.title}</p>
      <ul className={baseNodeStyles.group_list}>
        {data.props.data.map((goal) => {
          return (
            <li className={baseNodeStyles.item_list} key={goal.id}>
              <SimpleNode id={id} data={{ ...goal.data }} />
            </li>
          );
        })}
      </ul>
      <Handle
        id="right"
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default GroupNode;
