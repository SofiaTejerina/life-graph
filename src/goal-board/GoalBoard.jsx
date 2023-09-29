import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import "./baseNode.css";
import SimpleNode from "./SimpleNode";
import GroupNode from "./GroupNode";

import goalsData from "../database/goals.json";

const minimapStyle = {
  height: 120,
};

const initialGoal = {
  title: "Holitas",
};

const initialNodes = [
  {
    id: "1",
    type: "simpleNode",
    position: { x: 250, y: 0 },
    data: initialGoal,
  },

  {
    id: "2",
    type: "simpleNode",
    position: { x: 100, y: 100 },
    data: initialGoal,
  },
  {
    id: "5",
    type: "groupNode",
    position: { x: 600, y: 400 },
    data: initialGoal,
  },
  {
    id: "8",
    type: "groupNode",
    position: { x: 200, y: 400 },
    data: initialGoal,
  },
];

const initialEdges = [];

const nodeTypes = {
  simpleNode: SimpleNode,
  groupNode: GroupNode,
};

const GoalBoard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(goalsData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default GoalBoard;
