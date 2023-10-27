import { useContext } from "react";
import { GoalABMContext } from "../contexts/GoalABMContext";
import "./boardContentMenu.css";

const BoardContextMenu = ({ verticalPosition, horizontalPosition }) => {
  const { setIsCreatingNode, setIsSimpleNode } = useContext(GoalABMContext);

  return (
    <div
      className="external-container"
      style={{
        top: verticalPosition,
        left: horizontalPosition,
      }}
    >
      <p
        className="option-item box"
        onClick={() => {
          setIsSimpleNode(true);
          setIsCreatingNode(true);
        }}
      >
        Crear Simple Node
      </p>
      <hr />
      <p
        className="option-item box"
        onClick={() => {
          setIsSimpleNode(false);
          setIsCreatingNode(true);
        }}
      >
        Crear Group Node
      </p>
    </div>
  );
};

export default BoardContextMenu;
