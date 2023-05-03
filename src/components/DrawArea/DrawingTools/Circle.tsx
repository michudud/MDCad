import React from "react";

interface CircleProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
  };
}

export const Circle = ({ positions }: CircleProps) => {
  const { last_x, last_y, current_x, current_y } = positions;
  const r = Math.floor(
    Math.sqrt(
      Math.abs(current_x - last_x) ** 2 + Math.abs(current_y - last_y) ** 2
    )
  );
  return (
    <g>
      <circle cx={last_x} cy={last_y} r={r} stroke="black" fill="transparent" />
    </g>
  );
};

//export default Circle;
//export { Circle };
