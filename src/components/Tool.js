import React from "react";
import MenuIcon from "./MenuIcon";

const Tool = ({
  activeTool,
  tool_option,
  openOptions,
  activateTool,
  closeMenuAfterChoose,
  changeIcon,
}) => {
  return (
    <ul className={`Tool ${openOptions ? "open" : ""}`}>
      {tool_option.map((option, index) =>
        option !== activeTool ? (
          <li key={index} className="tool-item">
            <svg
              className="svg-menu-icon"
              onClick={(e) => {
                activateTool(e);
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
