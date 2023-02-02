import React, { useState } from "react";
import MenuIcon from "./MenuIcon";

const ElementsMenu = ({
  childrenComponents,
}: {
  childrenComponents: React.ReactElement[];
}) => {
  const [menuOpen, setMenuOpen] = useState(true);
  let components;
  const svgArea = document.getElementById("svg-area");
  if (childrenComponents.length > 0 && svgArea) {
    components = Array.from(svgArea.children[1].children);
  }

  if (components) {
    return (
      <div className={`ElementsMenu ${menuOpen ? "" : "closed"}`}>
        <button
          className={`ElementsMenuOpener ${menuOpen ? "" : "closed"}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <svg>
            <MenuIcon
              tool={`${menuOpen ? "OptionsRightArrow" : "OptionsLeftArrow"}`}
            />
          </svg>
        </button>
        <div className={`ElementsMenuItems ${menuOpen ? "" : "closed"}`}>
          {components.map((component, index) => {
            const inComp = component.children[0];
            const attrNames = inComp.getAttributeNames();
            return (
              <div className="element" key={"Element" + index}>
                <label className="element-name-label" htmlFor="name">
                  {inComp.tagName + " " + (index + 1)}
                </label>
                {attrNames.map((attr, attrIndex) => {
                  if (attr !== "fill") {
                    const type = attr === "stroke" ? "color" : "text";
                    return (
                      <span
                        className="element-attr"
                        key={"Element" + attrIndex}
                      >
                        <label htmlFor={attr}>{attr}:</label>
                        <input
                          type={type}
                          defaultValue={inComp.getAttribute(attr) + ""}
                          onChange={(e) => {
                            inComp.setAttribute(attr, e.target.value);
                          }}
                        />
                      </span>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`ElementsMenu ${menuOpen ? "" : "closed"}`}>
        <button
          className={`ElementsMenuOpener ${menuOpen ? "" : "closed"}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <svg>
            <MenuIcon
              tool={`${menuOpen ? "OptionsRightArrow" : "OptionsLeftArrow"}`}
            />
          </svg>
        </button>
      </div>
    );
  }
};

export default ElementsMenu;
