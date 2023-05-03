import React, { useContext } from "react";
import Tool from "./Tool";
import { useState, useRef, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import DrawingSettingsContext from "./DrawingSettingsContext";

interface ToolsListProps {
  tool: {
    name: string;
    options: string[];
  };
}

const ToolsList = ({ tool }: ToolsListProps) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [activeIcon, setActiveIcon] = useState(tool.name);
  const [toolSettings, _] = useContext(DrawingSettingsContext); // eslint-disable-line @typescript-eslint/no-unused-vars

  const changeIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as SVGElement;
    if (target.parentNode) {
      setActiveIcon(target.parentNode.textContent + "");
    }
  };
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent): void => {
      if (openOptions && ref.current) {
        if (!ref.current.contains(e.target as Node)) {
          setOpenOptions(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [openOptions]);

  const closeMenuAfterChoose = () => {
    setOpenOptions((prev) => !prev);
  };

  return (
    <li className="ToolsList" ref={ref}>
      <button
        className="button-menu-icon"
        onClick={() => setOpenOptions((prev) => !prev)}
        data-testid="toolsListButton"
      >
        <svg
          className={`svg-menu-icon ${
            activeIcon == toolSettings.activeTool ? "active" : ""
          }`}
        >
          <MenuIcon tool={activeIcon} />
        </svg>
      </button>
      <Tool
        tool_option={tool.options}
        openOptions={openOptions}
        closeMenuAfterChoose={closeMenuAfterChoose}
        changeIcon={changeIcon}
      />
    </li>
  );
};

export default ToolsList;
