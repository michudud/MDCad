import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import DrawArea from "./DrawArea";
import ToolsMenu from "./ToolsMenu";

const App = () => {
  const [activeTool, setActiveTool] = useState("Line");
  const [gridStatus, setGridStatus] = useState({
    status: true,
    size: 50,
    snap: true,
  });

  const activateTool = (e) => {
    setActiveTool(e.target.parentNode.textContent);
  };

  const turnGrid = () => {
    if (gridStatus.status) {
      setGridStatus({ ...gridStatus, status: !gridStatus.status, snap: false });
    } else {
      setGridStatus({ ...gridStatus, status: !gridStatus.status });
    }
  };

  const changeGridSize = (e) => {
    setGridStatus({
      ...gridStatus,
      size: parseInt(e.target.value),
    });
  };
  const turnGridSnap = () => {
    setGridStatus({ ...gridStatus, snap: !gridStatus.snap });
  };

  return (
    <div>
      <ToolsMenu
        activeTool={activeTool}
        activateTool={activateTool}
        turnGrid={turnGrid}
        changeGridSize={changeGridSize}
        turnGridSnap={turnGridSnap}
      />
      <DrawArea activeTool={activeTool} gridStatus={gridStatus} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
