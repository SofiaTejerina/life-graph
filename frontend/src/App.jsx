import { useEffect, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import axios from "axios";

import "./App.css";
import GoalSideBar from "./goal-dashboard/GoalSideBar";
import { GoalContext } from "./contexts/GoalGontext";
import { InformationContext } from "./contexts/InformationContext";
import GoalBoard from "./goal-board/GoalBoard";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

function App() {
  // GoalContext
  const [currentGoal, setCurrentGoal] = useState();

  // InformationContext
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

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
          <div
            className="right-side-component"
            onContextMenu={(e) => {
              // prevent the default behaviour when right clicked
              e.preventDefault();
            }}
          >
            <GoalBoard />
          </div>
        </div>
      </GoalContext.Provider>
    </InformationContext.Provider>
  );
}

export default App;
