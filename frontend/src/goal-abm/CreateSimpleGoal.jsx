import { useContext } from "react";
import { GoalABMContext } from "../contexts/GoalABMContext";

const CreateSimpleGoal = () => {
  const { setIsCreatingNode } = useContext(GoalABMContext);

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 999,
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        marginTop: "-20%",
        marginLeft: "-20%",
        width: "400px",
        height: "400px",
        border: "solid",
      }}
    >
      Holaaa creando un nuevo goal! Tu puedes pollo, te amo!
      <button
        onClick={() => {
          setIsCreatingNode(false);
        }}
      >
        Cancelar
      </button>
    </div>
  );
};

export default CreateSimpleGoal;
