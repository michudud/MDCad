import React from "react";
import { saveSvgAsPng } from "save-svg-as-png";
import MenuIcon from "./MenuIcon";

const DocumentControlMenu = () => {
  return (
    <div className="controlMenu">
      <button className="control-menu-button">
        <svg
          className="menu-button-svg"
          onClick={() => {
            let drawing = document.getElementById("svg-area");
            drawing.children[0].style.visibility = "hidden";
            saveSvgAsPng(drawing, "drawing.png", {
              backgroundColor: "white",
            });

            setTimeout(() => {
              drawing.children[0].style.visibility = "visible";
            }, "1");
          }}
        >
          <MenuIcon tool={"Save"} />
        </svg>
      </button>
      <button className="control-menu-button">
        <svg
          className="menu-button-svg"
          onClick={() => {
            document.getElementById("svg-area").children[1].innerHTML = "";
          }}
        >
          <MenuIcon tool={"Clear"} />
        </svg>
      </button>
    </div>
  );
};

export default DocumentControlMenu;
