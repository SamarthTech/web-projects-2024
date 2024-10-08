import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import RichContentNode from './components/RichContentNode';
import FlowControls from './components/FlowControls';
import { initialNodes, initialEdges } from './components/initialData';
import {
  createNewNode,
  updateNodeContent,
  updateNodeColor,
  highlightSearchedNodes,
  resetNodesAndEdges
} from './components/utils';

const nodeTypes = {
  richContentNode: RichContentNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [searchTerm, setSearchTerm] = useState('');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onAdd = useCallback(() => {
    const newNode = createNewNode();
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onDelete = useCallback(() => {
    setNodes((nds) => nds.filter((node) => !node.selected));
    setEdges((eds) => eds.filter((edge) => !edge.selected));
  }, [setNodes, setEdges]);

  const onNodeDoubleClick = useCallback((event, node) => {
    const newContent = prompt('Enter new content:', node.data.content);
    if (newContent !== null) {
      setNodes((nds) => updateNodeContent(nds, node.id, newContent));
    }
  }, [setNodes]);

  const onNodeContextMenu = useCallback(
    (event, node) => {
      event.preventDefault();
      const color = prompt('Enter a color (e.g., #ff0000 or red):');
      if (color) {
        setNodes((nds) => updateNodeColor(nds, node.id, color));
      }
    },
    [setNodes]
  );

  const onSearch = useCallback(() => {
    setNodes((nds) => highlightSearchedNodes(nds, searchTerm));
  }, [setNodes, searchTerm]);

  const onSearchTermChange = useCallback((e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    
    if (newSearchTerm === '') {
      const { nodes: resetNodes, edges: resetEdges } = resetNodesAndEdges(nodes, edges);
      setNodes(resetNodes);
      setEdges(resetEdges);
    }
  }, [setNodes, setEdges, nodes, edges]);

  const onSelectionChange = useCallback(({ nodes, edges }) => {
    setNodes((nds) => nds.map((n) => ({ ...n, selected: nodes.some((node) => node.id === n.id) })));
    setEdges((eds) => eds.map((e) => ({ ...e, selected: edges.some((edge) => edge.id === e.id) })));
  }, [setNodes, setEdges]);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDoubleClick={onNodeDoubleClick}
        onNodeContextMenu={onNodeContextMenu}
        onSelectionChange={onSelectionChange}
        nodeTypes={nodeTypes}
        multiSelectionKeyCode="Control"
        selectionKeyCode="Control"
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
        <FlowControls
          onAdd={onAdd}
          onDelete={onDelete}
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSearch={onSearch}
        />
      </ReactFlow>
    </div>
  );
}

export default App;