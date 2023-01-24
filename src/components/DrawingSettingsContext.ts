import { createContext } from "react";

interface SettingsContextType {
  activeTool: string;
  gridStatus: boolean;
  gridSize: number;
  gridSnap: boolean;
}

const DrawingSettingsContext = createContext<
  [SettingsContextType, (drawingSettings: SettingsContextType) => void] // |null
>([
  {
    activeTool: "Line",
    gridStatus: true,
    gridSize: 50,
    gridSnap: true, //cale na null
  },
  () => {},
]);

export default DrawingSettingsContext;
