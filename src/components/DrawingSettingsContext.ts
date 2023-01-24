import { createContext } from "react";

interface SettingsContextType {
  activeTool: string;
  gridStatus: boolean;
  gridSize: number;
  gridSnap: boolean;
}

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
