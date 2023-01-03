import React from "react";

export const Ellipse = ({ positions }) => {
  const { last_x, last_y, current_x, current_y } = positions;
  let rx = Math.abs(current_x - last_x);
  let ry = Math.abs(current_y - last_y);

  return (
    <g>
      <ellipse
        cx={last_x}
        cy={last_y}
        rx={rx}
        ry={ry}
        stroke="black"
        fill="transparent"
      />
    </g>
  );
};

//export default Ellipse;
