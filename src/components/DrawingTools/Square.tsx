import React from "react";

interface SquareProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
  };
}

export const Square = ({ positions }: SquareProps) => {
  const { last_x, last_y, current_x, current_y } = positions;
  let width = Math.abs(current_x - last_x);
  let height = Math.abs(current_y - last_y);
  let x, y;

  if (width >= height) {
    height = width;
  } else {
    width = height;
  }

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

//export default Square;
