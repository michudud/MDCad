import "./App.style.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import DrawArea from "../DrawArea";
import ToolsMenu from "../ToolsMenu";
import DrawingSettingsContext from "../../context/DrawingSettingsContext";

const App = () => {
  const drawingSettings = useState({
    activeTool: "Line",
    gridStatus: true,
    gridSize: 50,
    gridSnap: true,
  });

  return (
    <DrawingSettingsContext.Provider value={drawingSettings}>
      <ToolsMenu />
      <DrawArea />
    </DrawingSettingsContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
