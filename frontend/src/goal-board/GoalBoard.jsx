import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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

const nodeTypes = {
  simpleNode: SimpleNode,
  groupNode: GroupNode,
};

const GoalBoard = () => {
  // Get information from context
  const {
    nodes,
    onNodesChange,
    setNodes,
    edges,
    setEdges,
    onEdgesChange,
    nextID,
    setNextID,
  } = useContext(InformationContext);

  // Add new Edge
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds)), [];
  });

  // Add new Node
  const { project } = useReactFlow();
  const reactFlowWrapper = useRef(null);
  const onRightClickInTheBoard = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");
      console.log(nextID);
      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const newNode = {
          id: nextID.toString(),
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
        setNextID((n) => n + 1);
        setNodes((nodes) => nodes.concat(newNode));
      }
    },
    [project, nextID]
  );

  return (
    <div id="root" ref={reactFlowWrapper}>
      {!nodes?.loading && !edges?.loading && (
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
          proOptions={{ hideAttribution: true }}
        >
          <MiniMap
            style={{
              height: 120,
            }}
            zoomable
            pannable
          />
          <Controls />
          <Background color="#aaa" gap={16} />
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              zIndex: 7,
              fontSize: "12px",
            }}
          ></div>
        </ReactFlow>
      )}
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
