import React, { useCallback, useContext, useRef } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useReactFlow,
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
  const { nodes, onNodesChange, setNodes, edges, setEdges, onEdgesChange } =
    useContext(InformationContext);

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds)), [];
  });

  const { project } = useReactFlow();
  const reactFlowWrapper = useRef(null);

  const onRightClickInTheBoard = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");
      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const newNode = {
          id: "30",
          type: "simpleNode",
          position: project({
            x: event.clientX - left,
            y: event.clientY - top,
          }),
          data: {
            props: {
              title: "Nuevo Nodo",
              data: {
                progress: "Ingresar progreso",
                time: "Ingresar año",
                money: "Ingresar inversion",
              },
            },
          },
          width: 58,
          height: 37,
          selected: false,
          positionAbsolute: {
            x: 393.36044252233125,
            y: -396.6625359750876,
          },
          dragging: false,
        };
        setNodes((nodes) => nodes.concat(newNode));
      }
    },
    [project]
  );

  return (
    <div id="root" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        onPaneContextMenu={onRightClickInTheBoard}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default () => {
  return (
    <ReactFlowProvider>
      <GoalBoard />
    </ReactFlowProvider>
  );
};
