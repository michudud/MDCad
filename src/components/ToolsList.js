import React from "react";
import Tool from "./Tool";
import { useState, useRef, useEffect } from "react";
import MenuIcon from "./MenuIcon";

const ToolsList = ({ tool, activateTool, activeTool }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [activeIcon, setActiveIcon] = useState(tool.name);

  const changeIcon = (e) => {
    setActiveIcon(e.target.parentNode.textContent);
  };
  let ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (openOptions && ref.current && !ref.current.contains(e.target)) {
        setOpenOptions(false);
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
      <svg
        className={`svg-menu-icon ${activeIcon == activeTool ? "active" : ""}`}
        onClick={() => setOpenOptions((prev) => !prev)}
      >
        <MenuIcon tool={activeIcon} />
      </svg>
      <Tool
        activeTool={activeTool}
        tool_option={tool.options}
        openOptions={openOptions}
        activateTool={activateTool}
        closeMenuAfterChoose={closeMenuAfterChoose}
        changeIcon={changeIcon}
      />
    </li>
  );
};

export default ToolsList;
