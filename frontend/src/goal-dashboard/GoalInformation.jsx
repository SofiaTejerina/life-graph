import EditText from "../utils/EditText";

const GoalInformation = ({ goal, onSaveAction }) => {
  return (
    <div>
      {console.log(JSON.stringify(goal))}
      <EditText
        name={"title"}
        placeholder="Goal name"
        value={goal.title}
        onSave={({ value }) => {
          onSaveAction({ newData: goal.data, newTitle: value });
        }}
      />
      <EditText
        name={"progress"}
        placeholder="Goal progress"
        value={goal.data.progress}
        onSave={({ value }) => {
          onSaveAction({
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
          onSaveAction({
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
          onSaveAction({
            newData: { ...goal.data, money: value },
            newTitle: goal.title,
          });
        }}
      />
    </div>
  );
};

export default GoalInformation;
