import * as React from "react";

interface ArcProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
    radius_x: number;
    radius_y: number;
  };
}

export const Arc = ({ positions }: ArcProps) => {
  const { last_x, last_y, current_x, current_y, radius_x, radius_y } =
    positions;

  return (
    <g>
      <path
        d={
          "M" +
          last_x +
          " " +
          last_y +
          " Q " +
          radius_x +
          " " +
          radius_y +
          " " +
          current_x +
          " " +
          current_y +
          ""
        }
        stroke="black"
        fill="transparent"
      />
    </g>
  );
};

//export default Arc;
