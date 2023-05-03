import React from "react";

interface ArcLineProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
  };
}

export const ArcLine = ({ positions }: ArcLineProps) => {
  const { last_x, last_y, current_x, current_y } = positions;

  return (
    <line
      x1={last_x}
      y1={last_y}
      x2={current_x}
      y2={current_y}
      stroke="black"
      strokeDasharray="8 4"
    />
  );
};

//export default ArcLine;
