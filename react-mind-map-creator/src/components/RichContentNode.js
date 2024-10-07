import React from 'react';
import { Handle, Position } from 'reactflow';

const RichContentNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="rich-content-node">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default RichContentNode;