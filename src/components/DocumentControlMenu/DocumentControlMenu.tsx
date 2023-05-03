import "./DocumentControlMenu.style.css";
import { saveSvgAsPng } from "save-svg-as-png";
import MenuIcon from "../../icons/MenuIcon";

const DocumentControlMenu = () => {
  return (
    <div className="controlMenu">
      <button className="control-menu-button">
        <svg
          className="menu-button-svg"
          onClick={() => {
            const drawing = document.getElementById("svg-area");
            if (drawing) {
              const drawingChild = drawing.children[0] as HTMLElement;
              drawingChild.style.visibility = "hidden";
              saveSvgAsPng(drawing, "drawing.png", {
                backgroundColor: "white",
              });

              setTimeout(() => {
                drawingChild.style.visibility = "visible";
              }, 1);
            }
          }}
        >
          <MenuIcon tool={"Save"} />
        </svg>
      </button>
      <button className="control-menu-button">
        <svg
          className="menu-button-svg"
          onClick={() => {
            const clearIcon = document.getElementById("svg-area");
            if (clearIcon) {
              clearIcon.children[1].innerHTML = "";
            }
          }}
        >
          <MenuIcon tool={"Clear"} />
        </svg>
      </button>
    </div>
  );
};

export default DocumentControlMenu;
