import { Handle, Position } from "reactflow";
import "./baseNode.css";

const SimpleNode = ({
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
