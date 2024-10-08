export const initialNodes = [
  { 
    id: '1', 
    type: 'richContentNode', 
    data: { content: 'Main Topic 🌟' }, 
    position: { x: 250, y: 25 } 
  },
];

export const initialEdges = [];

export const nodeColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9c74f', '#9d65c9'];

export const getNewId = (() => {
  let id = 1;
  return () => `${++id}`;
})();