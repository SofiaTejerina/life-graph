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

const defaultSimpleNodeValues = {
  type: "simpleNode",
  title: "New Node",
  progress: "Progress input",
  time: "Time input",
  money: "Money input",
};

const returnNewSimpleNode = (nextID, position) => {
  return {
    id: nextID.toString(),
    type: defaultSimpleNodeValues.type,
    position: position,
    data: {
      props: {
        title: defaultSimpleNodeValues.title,
        data: {
          progress: defaultSimpleNodeValues.progress,
          time: defaultSimpleNodeValues.time,
          money: defaultSimpleNodeValues.money,
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
};

const returnNewGroupNode = (nextID, position, allNodes, selectedNodesIds) => {
  // first load all simple nodes
  let newNodeData = allNodes
    .filter((n) => selectedNodesIds.includes(n.id) && n.type !== "groupNode")
    .map((n) => {
      return { ...n };
    });

  // second load the nodes into the group nodes
  allNodes
    .filter((n) => selectedNodesIds.includes(n.id) && n.type === "groupNode")
    .map((n) => {
      n.data.props.data.map((sn) => {
        newNodeData.push({ ...sn });
      });
    });

  return {
    id: nextID.toString(),
    type: "groupNode",
    position: position,
    data: {
      props: {
        title: "Group Node",
        data: newNodeData,
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

  // create and safe new nodes
  const createAndAddNewNode = (isGroupNode, event) => {
    const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
    let newNode = null;
    if (isGroupNode) {
      // create the new group node
      newNode = returnNewGroupNode(
        nextID,
        project({
          x: event.clientX - left,
          y: event.clientY - top,
        }),
        nodes,
        selectedNodes
      );
    } else {
      // create the new simple node
      newNode = returnNewSimpleNode(
        nextID,
        project({
          x: event.clientX - left,
          y: event.clientY - top,
        })
      );
    }
    if (newNode !== null) {
      // update the next id node value
      setNextID((n) => n + 1);
      // add the new node
      setNodes((nodes) => nodes.concat(newNode));
    }
  };

  // Add new Node
  const { project } = useReactFlow();
  const reactFlowWrapper = useRef(null);
  const onRightClickInTheBoard = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains("react-flow__pane");
      event.preventDefault();
      if (targetIsPane) {
        createAndAddNewNode(false, event);
      }
    },
    [project, nextID]
  );

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
      // Prevent native context menu from showing
      event.preventDefault();

      // If there are selected nodes we create a group node
      if (selectedNodes.length > 1) {
        createAndAddNewNode(true, event);
        // delete the nodes that now are part of the group node
        setNodes((nodes) =>
          nodes.filter((node) => !selectedNodes.includes(node.id))
        );
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
