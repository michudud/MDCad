import React from "react";

export const Circle = ({ positions }) => {
  const { last_x, last_y, current_x, current_y } = positions;
  let r = parseInt(
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
