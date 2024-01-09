import React, { FC, useEffect, useState } from 'react';

interface Block {
  width: number;
  height: number;
  count: number;
  color: string;
}

interface PackedBlock {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

const Sheet: FC = () => {
  const blocks: Block[] = [
    { width: 480, height: 672, count: 50, color: 'blue' },
    { width: 288, height: 432, count: 70, color: 'red' },
    { width: 864, height: 192, count: 50, color: 'green' },
  ];

  const sheetWidth = 1980;
  const sheetHeight = 3840;

  const [sheets, setSheets] = useState<PackedBlock[][]>([]);

  useEffect(() => {
    const sortedBlocks = blocks
      .map(block => Array.from({ length: block.count }, () => ({ width: block.width, height: block.height, color: block.color })))
      .flat()
      .sort((a, b) => b.width * b.height - a.width * a.height);

    const resultSheets: PackedBlock[][] = [];

    while (sortedBlocks.length > 0) {
      const currentSheet: PackedBlock[] = [];
      let currentX = 0;
      let currentY = 0;

      for (let i = 0; i < sortedBlocks.length; i++) {
        const block = sortedBlocks[i];

        if (currentX + block.width <= sheetWidth && currentY + block.height <= sheetHeight) {
          currentSheet.push({ x: currentX, y: currentY, width: block.width, height: block.height, color: block.color });
          currentX += block.width;
          sortedBlocks.splice(i, 1);
          i--;
        } else {
          currentX = 0;
          currentY += block.height;
        }
      }

      resultSheets.push(currentSheet);
    }

    
    for (let sheetIndex = 0; sheetIndex < resultSheets.length; sheetIndex++) {
      const currentSheet = resultSheets[sheetIndex];

      for (let i = 0; i < sortedBlocks.length; i++) {
        const block = sortedBlocks[i];

        for (let j = 0; j < currentSheet.length; j++) {
          const position = currentSheet[j];

          if (position.width >= block.width && position.height >= block.height) {
            currentSheet.splice(j, 1, { x: position.x, y: position.y, width: block.width, height: block.height, color: block.color });
            sortedBlocks.splice(i, 1);
            i--;
            break;
          }
        }
      }
    }

    setSheets(resultSheets);
  }, []);

  return (
    <div>
      {sheets.map((sheet, sheetIndex) => (
        <div key={`sheet-${sheetIndex}`} style={{ position: 'relative', width: sheetWidth, height: sheetHeight, border: '1px solid black' }}>
          {sheet.map((block, blockIndex) => (
            <div
              key={`block-${sheetIndex}-${blockIndex}`}
              style={{
                position: 'absolute',
                top: block.y,
                left: block.x,
                width: block.width - 2,
                height: block.height - 2,
                backgroundColor: block.color,
                border: '1px solid black',
                boxSizing: 'border-box',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sheet;
