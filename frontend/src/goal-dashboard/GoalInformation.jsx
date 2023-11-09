import { useContext } from "react";
import { InformationContext } from "../contexts/InformationContext";
import { GoalContext } from "../contexts/GoalGontext";
import EditText from "../utils/EditText";

const GoalInformation = ({ goal }) => {
  const { nodes, setNodes } = useContext(InformationContext);
  const { setCurrentGoal } = useContext(GoalContext);

  const updateNodeData = ({ newTitle, newData }) => {
    if (nodes?.loading || !goal) return;
    setNodes((nds) => {
      return nds.map((node) => {
        if (node.id === goal.id) {
          node.data.props = {
            data: newData,
            title: newTitle,
          };
          // update the current node in order tu vizualize the right data
          setCurrentGoal({ ...node.data.props, id: node.id }); // Creo que esto lo tengo que mandar al final y actualizar el currentGoal basandome en el id del nodo
        }
        return node;
      });
    });
  };

  return (
    <div>
      {console.log(JSON.stringify(goal))}
      <EditText
        name={"title"}
        placeholder="Goal name"
        value={goal.title}
        onSave={({ value }) => {
          updateNodeData({ newData: goal.data, newTitle: value });
        }}
      />
      <EditText
        name={"progress"}
        placeholder="Goal progress"
        value={goal.data.progress}
        onSave={({ value }) => {
          updateNodeData({
            newData: { ...goal.data, progress: value },
            newTitle: goal.title,
          });
        }}
      />
      <EditText
        name={"time"}
        placeholder="Goal time"
        value={goal.data.time}
        onSave={({ value }) => {
          updateNodeData({
            newData: { ...goal.data, time: value },
            newTitle: goal.title,
          });
        }}
      />
      <EditText
        name={"money"}
        placeholder="Goal money"
        value={goal.data.money}
        onSave={({ value }) => {
          updateNodeData({
            newData: { ...goal.data, money: value },
            newTitle: goal.title,
          });
        }}
      />
    </div>
  );
};

export default GoalInformation;
