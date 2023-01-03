import React from "react";

export const Line = ({ positions }) => {
  return (
    <g>
      <line
        x1={positions.last_x}
        y1={positions.last_y}
        x2={positions.current_x}
        y2={positions.current_y}
        stroke="black"
        strokeWidth="1"
      />
    </g>
  );
};

//export default Line;
