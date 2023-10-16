import React, { useCallback, useContext, useEffect } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import "./baseNode.css";
import SimpleNode from "./SimpleNode";
import GroupNode from "./GroupNode";

import { InformationContext } from "../contexts/InformationContext";

const minimapStyle = {
  height: 120,
};

const nodeTypes = {
  simpleNode: SimpleNode,
  groupNode: GroupNode,
};

const GoalBoard = () => {
  const {
    nodes,
    setNodes,
    updateNodesChange,
    edges,
    setEdges,
    updateEdgesChange,
  } = useContext(InformationContext);

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds)), [];
  });

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={updateNodesChange}
        onEdgesChange={updateEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default GoalBoard;
