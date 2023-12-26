import nodeContextMenuStyles from "../styles/nodeContextMenu.module.css";

const NodeContextMenu = ({
  verticalPosition,
  horizontalPosition,
  onCreateGroupNodeClick,
}) => {
  return (
    <div
      className={nodeContextMenuStyles.external_container}
      style={{
        top: verticalPosition,
        left: horizontalPosition,
      }}
    >
      <p
        className={`${nodeContextMenuStyles.option_item} ${nodeContextMenuStyles.box}`}
        onClick={onCreateGroupNodeClick}
      >
        Agrupar nodos
      </p>
    </div>
  );
};

export default NodeContextMenu;
