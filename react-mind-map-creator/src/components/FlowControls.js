import React from 'react';
import { Panel } from 'reactflow';

const FlowControls = ({ onAdd, onDelete, searchTerm, onSearchTermChange, onSearch }) => {
  return (
    <Panel position="top-left">
      <button onClick={onAdd}>Add Node</button>
      <button onClick={onDelete} style={{ marginLeft: 10 }}>Delete Selected</button>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchTermChange}
        placeholder="Search nodes..."
        style={{ marginLeft: 10 }}
      />
      <button onClick={onSearch} style={{ marginLeft: 10 }}>Search</button>
    </Panel>
  );
};

export default FlowControls;