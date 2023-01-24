import React from "react";

interface GridProps {
  gridStatus: {
    status: boolean;
    size: number;
    snap: boolean;
  };
}

const Grid = ({ gridStatus }: GridProps) => {
  if (gridStatus.status === true) {
    return (
      <g>
        <defs>
          <pattern
            id="smallGrid"
            width={gridStatus.size}
            height={gridStatus.size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={
                "M " +
                gridStatus.size +
                " 0 L " +
                gridStatus.size +
                " " +
                gridStatus.size +
                " 0 " +
                gridStatus.size
              }
              fill="none"
              stroke="gray"
            />
          </pattern>
          <pattern
            id="grid"
            width={gridStatus.size * 10}
            height={gridStatus.size * 10}
            patternUnits="userSpaceOnUse"
          >
            <rect
              width={gridStatus.size * 10}
              height={gridStatus.size * 10}
              fill="url(#smallGrid)"
            />
            <path
              d={
                "M " +
                gridStatus.size * 10 +
                " 0 L " +
                gridStatus.size * 10 +
                " " +
                gridStatus.size * 10 +
                " 0 " +
                gridStatus.size * 10
              }
              fill="none"
              stroke="gray"
              strokeWidth="2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </g>
    );
  }
  return null;
};

export default Grid;
