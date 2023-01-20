import React from "react";

interface RectProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
  };
}

export const Rect = ({ positions }: RectProps) => {
  const { last_x, last_y, current_x, current_y } = positions;
  const width = Math.abs(current_x - last_x);
  const height = Math.abs(current_y - last_y);
  let x, y;

  if (current_x < last_x && current_y < last_y) {
    x = current_x;
    y = current_y;
  } else if (current_x < last_x) {
    x = current_x;
    y = last_y;
  } else if (current_y < last_y) {
    x = last_x;
    y = current_y;
  } else {
    x = last_x;
    y = last_y;
  }
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        stroke="black"
        fill="transparent"
      />
    </g>
  );
};

//export default Rect;
