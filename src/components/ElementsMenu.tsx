import React from "react";

const ElementsMenu = ({
  childrenComponents,
}: {
  childrenComponents: React.ReactElement[];
}) => {
  let components;
  const svgArea = document.getElementById("svg-area");
  if (childrenComponents.length > 0 && svgArea) {
    components = Array.from(svgArea.children[1].children);
  }

  if (components) {
    return (
      <div className="ElementsMenu">
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
                    <span className="element-attr" key={"Element" + attrIndex}>
                      <label htmlFor={attr}>{attr}:</label>
                      <input
                        type={type}
                        defaultValue={inComp.getAttribute(attr) as string}
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
