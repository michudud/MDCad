import { createContext } from "react";
import { SettingsContextType } from "./DrawingSettingsContext.types";

const DrawingSettingsContext = createContext<
  [SettingsContextType, (drawingSettings: SettingsContextType) => void]
>([
  {
    activeTool: "Line",
    gridStatus: true,
    gridSize: 50,
    gridSnap: true,
  },
  () => {},
]);

export default DrawingSettingsContext;
