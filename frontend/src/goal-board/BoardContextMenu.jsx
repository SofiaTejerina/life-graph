import { useContext } from "react";
import { GoalABMContext } from "../contexts/GoalABMContext";
import "./boardContentMenu.css";

const BoardContextMenu = ({ verticalPosition, horizontalPosition }) => {
  const { setIsCreatingNode } = useContext(GoalABMContext);

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
          setIsCreatingNode(true);
          console.log("Crear nodo 1");
        }}
      >
        Crear Simple Node
      </p>
      <hr />
      <p
        className="option-item"
        onClick={() => {
          console.log("Crear nodo 2");
        }}
      >
        Crear Group Node
      </p>
    </div>
  );
};

export default BoardContextMenu;
