import React from "react";

const Circle = ({ pointX, pointY }) => {
  return (
    <circle cx={pointX} cy={pointY} r="5" stroke="black" fill="transparent" />
  );
};

export default Circle;
