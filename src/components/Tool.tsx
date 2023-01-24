import React from "react";
import { useContext } from "react";
import DrawingSettingsContext from "./DrawingSettingsContext";
import MenuIcon from "./MenuIcon";

interface ToolProps {
  tool_option: string[];
  openOptions: boolean;
  closeMenuAfterChoose(): void;
  changeIcon(e: React.MouseEvent<SVGElement>): void;
}

const Tool = ({
  tool_option,
  openOptions,
  closeMenuAfterChoose,
  changeIcon,
}: ToolProps) => {
  const [toolSettings, setToolSettings] = useContext(DrawingSettingsContext);

  return (
    <ul className={`Tool ${openOptions ? "open" : ""}`}>
      {tool_option.map((option, index) =>
        option !== toolSettings.activeTool ? (
          <li key={index} className="tool-item">
            <svg
              className="svg-menu-icon"
              onClick={(e) => {
                const target = e.target as Node;
                if (target.parentNode) {
                  setToolSettings({
                    ...toolSettings,
                    activeTool: target.parentNode.textContent + "",
                  });
                }
                closeMenuAfterChoose();
                changeIcon(e);
              }}
            >
              <MenuIcon tool={option} />
            </svg>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Tool;
