import React from "react";

const ElementsMenu = ({ childrenComponents }) => {
  let components;
  if (childrenComponents.length > 0) {
    components = Array.from(
      document.getElementById("svg-area").children[1].children
    );
  }

  if (components !== undefined) {
    return (
      <div className="ElementsMenu">
        {components.map((component, index) => {
          let inComp = component.children[0];
          let attrNames = inComp.getAttributeNames();
          return (
            <div className="element" key={"Element" + index}>
              <label className="element-name-label" htmlFor="name">
                {inComp.tagName + " " + (index + 1)}
              </label>
              {attrNames.map((attr, attrIndex) => {
                if (attr !== "fill") {
                  let type = attr === "stroke" ? "color" : "text";
                  return (
                    <span className="element-attr" key={"Element" + attrIndex}>
                      <label htmlFor={attr}>{attr}:</label>
                      <input
                        type={type}
                        defaultValue={inComp.getAttribute(attr)}
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
    );
  } else {
    return <div className="ElementsMenu"></div>;
  }
};

export default ElementsMenu;
