import { useEffect, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import axios from "axios";

import "./App.css";
import GoalBoard from "./goal-board/GoalBoard";
import GoalSideBar from "./goal-dashboard/GoalSideBar";
import { GoalContext } from "./contexts/GoalGontext";
import { InformationContext } from "./contexts/InformationContext";
import BoardContextMenu from "./goal-board/BoardContextMenu";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

function App() {
  const [currentGoal, setCurrentGoal] = useState();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [rightButtonClicked, setRightButtonClicked] = useState(false);
  const [rightClickLocation, setRightClickLocation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Load the information from the backend
    client.get("/nodes").then((response) => setNodes(response.data));
    client.get("/edges").then((response) => setEdges(response.data));

    // Override right click in the board
    const handleRightClick = () => setRightButtonClicked(false);
    window.addEventListener("click", handleRightClick);
    return () => {
      window.removeEventListener("click", handleRightClick);
    };
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
              e.preventDefault(); // prevent the default behaviour when right clicked
              setRightButtonClicked(true);
              setRightClickLocation({
                x: e.pageX,
                y: e.pageY,
              });
              console.log(`Right Click, ${e.pageX} and ${e.pageY}`);
            }}
          >
            <GoalBoard />
          </div>
          {rightButtonClicked && (
            // <BoardContextMenu
            //   verticalPosition={rightClickLocation.y}
            //   horizontalPosition={rightClickLocation.x}
            // >
            <ul
              style={{
                position: "absolute",
                top: rightClickLocation.y,
                left: rightClickLocation.x,
                zIndex: 1000,
              }}
            >
              <li>Crear Simple Node</li>
              <li>Crear Group Node</li>
            </ul>
            // </BoardContextMenu>
          )}
        </div>
      </GoalContext.Provider>
    </InformationContext.Provider>
  );
}

export default App;
