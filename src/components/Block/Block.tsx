import React from 'react';

interface BlockProps {
  width: string;
  height: string;
  color: string;
  count: number;
}

const Block: React.FC<BlockProps> = ({ width, height, color, count }) => {
  const squares = Array.from({ length: count }, (_, index) => (
    <p
      key={index}
      style={{
        width,
        height,
        backgroundColor: color,
        margin: '2px', 
      }}
    >.</p>
  ));

  return <>{squares}</>;
};

export default Block;