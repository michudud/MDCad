interface LineProps {
  positions: {
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
  };
}

export const Line = ({ positions }: LineProps) => {
  return (
    <g>
      <line
        x1={positions.last_x}
        y1={positions.last_y}
        x2={positions.current_x}
        y2={positions.current_y}
        stroke="black"
        strokeWidth="1"
      />
    </g>
  );
};
