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
import NodeContextMenu from "./NodeContextMenu";

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
    selectedNodes,
    setSelectedNodes,
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

  // save wich nodes are beening selected
  useOnSelectionChange({
    onChange: ({ nodes, edges }) => {
      // TODO: poder editar el nombre del group
      setSelectedNodes(nodes.map((node) => node.id));
    },
  });

  // In order to create group nodes we must override the rick click of the node to create a new group node
  const [rightButtonClickedOnNode, setRightButtonClickedOnNode] =
    useState(false);
  const [rightClickLocationAndEvent, setRightClickLocationAndEvent] = useState({
    x: 0,
    y: 0,
    event: null,
  });

  const onRightClickOnNode = useCallback(
    (event, _) => {
      // Prevent native context menu from showing
      event.preventDefault();
      // If there are selected nodes we create a group node
      if (selectedNodes.length > 1) {
        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        setRightButtonClickedOnNode(true);
        setRightClickLocationAndEvent({
          x: event.clientX - left,
          y: event.clientY - top,
          event: event,
        });
      }
    },
    [rightButtonClickedOnNode, selectedNodes, rightClickLocationAndEvent]
  );

  // Close the context menu if it's open whenever the window is clicked.
  const onPaneClick = useCallback(() => {
    // set right click on false to hide the button
    setRightButtonClickedOnNode(false);
  }, [setRightButtonClickedOnNode]);

  const onCreateGroupNodeClick = useCallback(() => {
    createAndAddNewNode(true, rightClickLocationAndEvent.event);
    // delete the nodes that now are part of the group node
    setNodes((nodes) =>
      nodes.filter((node) => !selectedNodes.includes(node.id))
    );
    // quit the right button menu
    onPaneClick();
  }, [
    rightClickLocationAndEvent,
    selectedNodes,
    setSelectedNodes,
    setRightClickLocationAndEvent,
  ]);

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
          ,
          <MiniMap
            style={{
              height: 120,
            }}
            zoomable
            pannable
          />
          <Controls />
          {rightButtonClickedOnNode && (
            <NodeContextMenu
              onClick={onPaneClick}
              onCreateGroupNodeClick={onCreateGroupNodeClick}
              verticalPosition={rightClickLocationAndEvent.y}
              horizontalPosition={rightClickLocationAndEvent.x}
            />
          )}
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
