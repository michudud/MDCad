import React from "react";
import { useContext } from "react";
import DrawingSettingsContext from "./DrawingSettingsContext";
import MenuIcon from "./MenuIcon";

const Tool = ({
  tool_option,
  openOptions,
  closeMenuAfterChoose,
  changeIcon,
}) => {
  const [toolSettings, setToolSettings] = useContext(DrawingSettingsContext);

  return (
    <ul className={`Tool ${openOptions ? "open" : ""}`}>
      {tool_option.map((option, index) =>
        option !== toolSettings.activeTool ? (
          <li key={index} className="tool-item">
            <svg
              className="svg-menu-icon"
              onClick={(e) => {
                setToolSettings({
                  ...toolSettings,
                  activeTool: e.target.parentNode.textContent,
                });
                closeMenuAfterChoose();
                changeIcon(e);
              }}
            >
              <MenuIcon tool={option} value={option} />
            </svg>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Tool;
