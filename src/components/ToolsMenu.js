import React from "react";
import ToolsList from "./ToolsList";
import GridMenu from "./GridMenu";
import DocumentControlMenu from "./DocumentControlMenu";

const ToolsMenu = ({
  activeTool,
  activateTool,
  turnGrid,
  changeGridSize,
  turnGridSnap,
}) => {
  const Tools = [
    {
      name: "Line",
      options: ["Line"],
    },
    {
      name: "Rect",
      options: ["Rect", "Square"],
    },
    {
      name: "Circle",
      options: ["Circle", "Ellipse"],
    },
    {
      name: "Arc",
      options: ["Arc"],
    },
    // {
    //   name: "Select",
    //   options: ["Select"],
    // },
  ];

  return (
    <div className="ToolsMenu">
      <ul className="ToolsMenuList">
        {Tools.map((tool, index) => (
          <ToolsList
            key={index}
            tool={tool}
            activateTool={activateTool}
            activeTool={activeTool}
          />
        ))}
        <GridMenu
          turnGrid={turnGrid}
          changeGridSize={changeGridSize}
          turnGridSnap={turnGridSnap}
        />
        <DocumentControlMenu />
      </ul>
    </div>
  );
};

export default ToolsMenu;
