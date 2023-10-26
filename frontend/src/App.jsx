import { useEffect, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import axios from "axios";

import "./App.css";
import GoalSideBar from "./goal-dashboard/GoalSideBar";
import { GoalContext } from "./contexts/GoalGontext";
import { InformationContext } from "./contexts/InformationContext";
import BoardWrapper from "./goal-board/BoardWrapper";
import CreateSimpleGoal from "./goal-abm/CreateSimpleGoal";
import { GoalABMContext } from "./contexts/GoalABMContext";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

function App() {
  const [currentGoal, setCurrentGoal] = useState();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isCreatingNode, setIsCreatingNode] = useState(false);

  useEffect(() => {
    // Load the information from the backend
    client.get("/nodes").then((response) => setNodes(response.data));
    client.get("/edges").then((response) => setEdges(response.data));
  }, []);

  return (
    <InformationContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
      }}
    >
      <GoalContext.Provider value={{ currentGoal, setCurrentGoal }}>
        <div id="root">
          <div className="left-side-component">
            <GoalSideBar />
          </div>
          <GoalABMContext.Provider
            value={{ isCreatingNode, setIsCreatingNode }}
          >
            <BoardWrapper />
            {isCreatingNode && <CreateSimpleGoal />}
          </GoalABMContext.Provider>
        </div>
      </GoalContext.Provider>
    </InformationContext.Provider>
  );
}

export default App;
