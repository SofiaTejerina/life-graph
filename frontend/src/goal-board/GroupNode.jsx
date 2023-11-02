import { Handle, Position } from "reactflow";
import SimpleNode from "./SimpleNode";

const GroupNode = ({
  id,
  data = { title: "No funciono" },
  isConnectable = true,
}) => {
  return (
    <div className="simple-node">
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
            <li className="item-list" key={goal.props.id}>
              <SimpleNode id={id} data={goal} />
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
