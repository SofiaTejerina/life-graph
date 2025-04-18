import { useEffect, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import axios from "axios";

import GoalSideBar from "../goal-dashboard/GoalSideBar";
import { GoalContext } from "../contexts/GoalGontext";
import { InformationContext } from "../contexts/InformationContext";
import GoalBoard from "../goal-board/GoalBoard";

const client = axios.create({
  baseURL: "http://localhost:80/api/v1/graph",
});

function MainBoardPage() {
  // GoalContext
  const [currentGoal, setCurrentGoal] = useState();
  const [nextID, setNextID] = useState(0);

  // InformationContext
  const [nodes, setNodes, onNodesChange] = useNodesState({ loading: true });
  const [edges, setEdges, onEdgesChange] = useEdgesState({ loading: true });
  const [selectedNodes, setSelectedNodes] = useState([]);

  useEffect(() => {
    // Load the information from the backend
    client.get("/nodes").then((response) => setNodes(response.data));
    client
      .get("/nodes/next-id")
      .then((response) => setNextID(response.data.nextID));
    client.get("/edges").then((response) => setEdges(response.data));
  }, []);

  const [isSaving, setSaving] = useState(false);
  const onSave = async (nodes, edges) => {
    setSaving(true);
    if (!nodes?.loading) await client.put("/nodes", nodes);
    if (!edges?.loading) await client.put("/edges", edges);
    setTimeout(() => {
      // TODO: luego eliminar esto, es que no se porque se va y todavía no esta guardado!
      setSaving(false);
    }, 1000);
  };

  document.addEventListener("keydown", async (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      // Prevent the Save dialog to open
      e.preventDefault();

      await onSave(nodes, edges);
    }
  });

  return (
    <InformationContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        nextID,
        setNextID,
        selectedNodes,
        setSelectedNodes,
      }}
    >
      <GoalContext.Provider value={{ currentGoal, setCurrentGoal }}>
        <div id="root">
          {isSaving && <div className="informative-snackbar">Saving ...</div>}
          <div className="left-side-component">
            <div
              className="block"
              onClick={async () => await onSave(nodes, edges)}
            >
              Save
            </div>
            <GoalSideBar />
          </div>
          <div
            className="right-side-component"
            onContextMenu={(e) => {
              // prevent the default behaviour when right-clicked
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

export default MainBoardPage;
