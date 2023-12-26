import "../styles/nodecontextMenu.css";

const NodeContextMenu = ({
  verticalPosition,
  horizontalPosition,
  onCreateGroupNodeClick,
}) => {
  return (
    <div
      className="external-container"
      style={{
        top: verticalPosition,
        left: horizontalPosition,
      }}
    >
      <p className="option-item box" onClick={onCreateGroupNodeClick}>
        Agrupar nodos
      </p>
    </div>
  );
};

export default NodeContextMenu;
