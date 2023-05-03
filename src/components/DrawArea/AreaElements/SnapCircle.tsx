import React from "react";

const SnapCircle = ({ pointX, pointY }: { pointX: number; pointY: number }) => {
  return (
    <circle cx={pointX} cy={pointY} r="5" stroke="black" fill="transparent" />
  );
};

export default SnapCircle;
