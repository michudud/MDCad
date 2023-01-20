import React from "react";

interface EllipseProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
  };
}

export const Ellipse = ({ positions }: EllipseProps) => {
  const { last_x, last_y, current_x, current_y } = positions;
  const rx = Math.abs(current_x - last_x);
  const ry = Math.abs(current_y - last_y);

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
