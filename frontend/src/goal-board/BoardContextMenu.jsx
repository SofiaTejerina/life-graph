import "./boardContentMenu.css";

const BoardContextMenu = ({ verticalPosition, horizontalPosition }) => {
  return (
    <div
      className="external-container"
      style={{
        top: verticalPosition,
        left: horizontalPosition,
      }}
    >
      <p
        className="option-item"
        onClick={() => {
          console.log("Crear nodo 1");
        }}
      >
        Crear Simple Node
      </p>
      <hr />
      <p
        className="option-item"
        onClick={() => {
          console.log("Crear nodo 1");
        }}
      >
        Crear Group Node
      </p>
    </div>
  );
};

export default BoardContextMenu;
