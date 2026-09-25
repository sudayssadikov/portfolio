import React from 'react';

export default function DotMatrix({
  rows = 5,
  cols = 5,
  gap = 12,
  dotSize = 4,
  className = "",
  color = "#ABB2BF",
  highlightIndex = -1
}) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const index = r * cols + c;
      dots.push(
        <span
          key={`${r}-${c}`}
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: highlightIndex === index ? '#C778DD' : color,
          }}
          className="rounded-full inline-block transition-colors"
        />
      );
    }
  }

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}
      aria-hidden="true"
    >
      {dots}
    </div>
  );
}
