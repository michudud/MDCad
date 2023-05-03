import "./ToolsMenu.style.css";
import ToolsList from "../ToolsList";
import GridMenu from "../GridMenu";
import DocumentControlMenu from "../DocumentControlMenu";

const ToolsMenu = () => {
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
          <ToolsList key={index} tool={tool} />
        ))}
        <GridMenu />
        <DocumentControlMenu />
      </ul>
    </div>
  );
};

export default ToolsMenu;
