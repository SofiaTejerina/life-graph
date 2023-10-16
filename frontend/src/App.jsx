import { useState } from "react";
import "./App.css";
import GoalBoard from "./goal-board/GoalBoard";
import GoalSideBar from "./goal-dashboard/GoalSideBar";
import { GoalContext } from "./contexts/GoalGontext";
import { InformationContext } from "./contexts/InformationContext";

import { useNodesState, useEdgesState } from "reactflow";
import initialNodes from "./database/nodes.json";
import initialEdges from "./database/edges.json";

function App() {
  const [currentGoal, setCurrentGoal] = useState();
  const [nodes, setNodes, updateNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, updateEdgesChange] = useEdgesState(initialEdges);

  return (
    <InformationContext.Provider
      value={{
        nodes,
        setNodes,
        updateNodesChange,
        edges,
        setEdges,
        updateEdgesChange,
      }}
    >
      <GoalContext.Provider value={{ currentGoal, setCurrentGoal }}>
        <div id="root">
          <div className="left-side-component">
            <GoalSideBar />
          </div>
          <div id="board-root" className="right-side-component">
            <GoalBoard />
          </div>
        </div>
      </GoalContext.Provider>
    </InformationContext.Provider>
  );
}

export default App;
