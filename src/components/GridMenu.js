import React, { useEffect, useRef } from "react";

const GridMenu = ({ turnGrid, turnGridSnap, changeGridSize }) => {
  const statusRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    if (!statusRef.current.checked) {
      gridRef.current.checked = false;
    }
  });

  return (
    <fieldset className="grid-fieldset">
      <legend>Grid Options</legend>
      <div className="grid-element">
        <input
          type="checkbox"
          onChange={turnGrid}
          defaultChecked
          ref={statusRef}
        />
        <label htmlFor="grid-status" className="grid-label">
          On / Off
        </label>
      </div>
      <div className="grid-element">
        <input
          type="checkbox"
          onChange={turnGridSnap}
          defaultChecked
          ref={gridRef}
        />
        <label htmlFor="grid-snap" className="grid-label">
          Snap to grid
        </label>
      </div>
      <div className="grid-element">
        <label htmlFor="grid-size">Grid size:</label>
        <input
          type="range"
          min="10"
          max="100"
          step="10"
          onChange={(e) => {
            changeGridSize(e);
          }}
        ></input>
      </div>
    </fieldset>
  );
};

export default GridMenu;
