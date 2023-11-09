import { Handle, Position } from "reactflow";
import SimpleNode from "./SimpleNode";
import { GoalContext } from "../contexts/GoalGontext";
import { useContext } from "react";

const GroupNode = ({
  id,
  data = { title: "No funciono" },
  type,
  isConnectable = true,
}) => {
  const { setCurrentGoal } = useContext(GoalContext);

  return (
    <div
      className="simple-node"
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
      <ul className="group-list">
        {data.props.data.map((goal) => {
          return (
            <li className="item-list" key={goal.id}>
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
