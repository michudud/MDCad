import React from "react";

export const Arc = ({ positions }) => {
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
