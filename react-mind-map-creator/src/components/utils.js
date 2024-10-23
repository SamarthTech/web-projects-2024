import { nodeColors, getNewId } from './initialData';

export const createNewNode = () => {
  const id = getNewId();
  return {
    id,
    type: 'richContentNode',
    data: { content: `New Topic ${id} 📝` },
    position: {
      x: Math.random() * 500,
      y: Math.random() * 500,
    },
    style: { 
      backgroundColor: nodeColors[Math.floor(Math.random() * nodeColors.length)],
      border: '1px solid #ddd',
    },
  };
};

export const updateNodeContent = (nodes, nodeId, newContent) => 
  nodes.map((n) => (n.id === nodeId ? { ...n, data: { ...n.data, content: newContent } } : n));

export const updateNodeColor = (nodes, nodeId, color) =>
  nodes.map((n) => (n.id === nodeId ? { ...n, style: { ...n.style, backgroundColor: color } } : n));

export const highlightSearchedNodes = (nodes, searchTerm) =>
  nodes.map((node) => ({
    ...node,
    style: {
      ...node.style,
      border: node.data.content.toLowerCase().includes(searchTerm.toLowerCase())
        ? '2px solid #ff00ff'
        : '1px solid #ddd'
    }
  }));

export const resetNodesAndEdges = (nodes, edges) => ({
  nodes: nodes.map((node) => ({
    ...node,
    style: { ...node.style, border: '1px solid #ddd' },
    selected: false
  })),
  edges: edges.map((edge) => ({ ...edge, selected: false }))
});