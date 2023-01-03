import React from "react";

export const ArcLine = ({ positions }) => {
  const { last_x, last_y, current_x, current_y } = positions;
  let color = "black";

  return (
    <line
      x1={last_x}
      y1={last_y}
      x2={current_x}
      y2={current_y}
      stroke={color}
      strokeDasharray="8 4"
    />
  );
};

//export default ArcLine;
