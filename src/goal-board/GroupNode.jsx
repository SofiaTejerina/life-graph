import { Handle, Position } from "reactflow";
import SimpleNode from "./SimpleNode";
import { useContext } from "react";
import { GoalContext } from "../contexts/GoalGontext";

const GroupNode = ({
  data = { title: "No funciono" },
  isConnectable = true,
}) => {
  const { currentGoal, setCurrentGoal } = useContext(GoalContext);

  return (
    <div className="simple-node">
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <ul className="group-list">
        {data.props.data.map((goal) => {
          return (
            <li
              onClick={() => setCurrentGoal(goal.props)}
              className="item-list"
              key={goal.props.id}
            >
              <SimpleNode data={goal} />
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
