import "./Tool.style.css";
import React from "react";
import { useContext } from "react";
import DrawingSettingsContext from "../../context/DrawingSettingsContext";
import MenuIcon from "../../icons/MenuIcon";

interface ToolProps {
  tool_option: string[];
  openOptions: boolean;
  closeMenuAfterChoose(): void;
  changeIcon(e: React.MouseEvent<HTMLButtonElement>): void;
}

const Tool = ({
  tool_option,
  openOptions,
  closeMenuAfterChoose,
  changeIcon,
}: ToolProps) => {
  const [toolSettings, setToolSettings] = useContext(DrawingSettingsContext);

  return (
    <ul className={`Tool ${openOptions ? "open" : ""}`} data-testid="toolUl">
      {tool_option.map((option, index) =>
        option !== toolSettings.activeTool ? (
          <li key={index} className="tool-item">
            <button
              className="button-menu-icon"
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
              <svg className="svg-menu-icon" data-testid="toolSvg">
                <MenuIcon tool={option} />
              </svg>
            </button>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Tool;
