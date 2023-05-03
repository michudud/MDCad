import "./GridMenu.style.css";
import { useEffect, useRef, useContext } from "react";
import DrawingSettingsContext from "../../context/DrawingSettingsContext";

const GridMenu = () => {
  const [gridSettings, setGridSettings] = useContext(DrawingSettingsContext);
  const statusRef = useRef<HTMLInputElement>(null);
  const snapRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (snapRef.current) {
      if (!statusRef?.current?.checked) {
        snapRef.current.checked = false;
        snapRef.current.disabled = true;
      } else {
        snapRef.current.disabled = false;
      }
    }
  });

  return (
    <fieldset className="grid-fieldset">
      <legend>Grid Options</legend>
      <div className="grid-element">
        <input
          type="checkbox"
          onChange={() => {
            if (gridSettings.gridStatus) {
              setGridSettings({
                ...gridSettings,
                gridStatus: !gridSettings.gridStatus,
                gridSnap: false,
              });
            } else {
              setGridSettings({
                ...gridSettings,
                gridStatus: !gridSettings.gridStatus,
              });
            }
          }}
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
          onChange={() => {
            setGridSettings({
              ...gridSettings,
              gridSnap: !gridSettings.gridSnap,
            });
          }}
          defaultChecked
          ref={snapRef}
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
            setGridSettings({
              ...gridSettings,
              gridSize: parseInt(e.target.value),
            });
          }}
        ></input>
      </div>
    </fieldset>
  );
};

export default GridMenu;
