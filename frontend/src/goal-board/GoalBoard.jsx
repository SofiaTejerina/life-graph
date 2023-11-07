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
  useOnSelectionChange,
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
      } else {
        console.log("Holiss");
      }
    },
    [project, nextID]
  );

  // To create a group node
  // override del click derecho sobre un nodo https://reactflow.dev/api-reference/react-flow#on-node-context-menu

  // In order to create group nodes we must get what nodes are selected
  const [selectedNodes, setSelectedNodes] = useState([]);
  useOnSelectionChange({
    onChange: ({ nodes, edges }) => {
      // TODO: hacer que los nodos brillen o algo para saber que estan seleccionados
      // TODO: agregar una opcion de menu en el click derecho de agrupar
      // TODO: si estas agrupando con un group node que solo meta los que el group node tiene dentro
      // TODO: poder editar el nombre del group
      setSelectedNodes(nodes.map((node) => node.id));
    },
  });

  // In order to create group nodes we must override the rick click of the node to create a new group node
  const [menu, setMenu] = useState(null);
  const onRightClickOnNode = useCallback(
    (event, _) => {
      if (selectedNodes.length > 0) {
        // Prevent native context menu from showing
        event.preventDefault();
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();

        // Create the new group node
        const newNode = {
          id: nextID.toString(),
          type: "groupNode",
          position: project({
            x: event.clientX - left,
            y: event.clientY - top,
          }),
          data: {
            props: {
              title: "Group Node",
              data: nodes
                .filter((n) => selectedNodes.includes(n.id))
                .map((n) => {
                  return { ...n };
                }),
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
        setNodes((nodes) =>
          nodes.filter((node) => !selectedNodes.includes(node.id))
        );
        // console.log(`El nodo que se va a crear es: ${JSON.stringify(newNode)}`);
        // setMenu({
        //   id: node.id,
        //   top: event.clientY < pane.height - 200 && event.clientY,
        //   left: event.clientX < pane.width - 200 && event.clientX,
        //   right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        //   bottom:
        //     event.clientY >= pane.height - 200 && pane.height - event.clientY,
        // });
      }
    },
    [setMenu, selectedNodes]
  );

  // Close the context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

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
          onPaneClick={onPaneClick}
          onNodeContextMenu={onRightClickOnNode}
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
