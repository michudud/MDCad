import React, { useState, useEffect, useRef, useContext } from "react";
import Grid from "./Grid";
import SnapCircle from "./SnapCircle";
import ElementsMenu from "./ElementsMenu";
import {
  Line,
  Rect,
  Square,
  Circle,
  Ellipse,
  Arc,
  ArcLine,
} from "./DrawingTools";
import DrawingSettingsContext from "./DrawingSettingsContext";

const DrawArea = () => {
  const [childrenComponents, setChildrenComponents] = useState([]);
  const [positions, setPositions] = useState({});
  const [activePositions, setActivePosition] = useState({});
  const [activeRender, setActiveRender] = useState([]);
  const [activeSnap, setActiveSnap] = useState([]);
  const [drawingSettings, _] = useContext(DrawingSettingsContext); // eslint-disable-line no-unused-vars

  const activeTool = drawingSettings.activeTool;
  const gridStatus = {
    status: drawingSettings.gridStatus,
    size: drawingSettings.gridSize,
    snap: drawingSettings.gridSnap,
  };

  let svgLeft, svgTop;

  const toolSelector = () => {
    switch (activeTool) {
      case "Line":
        return Line;
      case "Circle":
        return Circle;
      case "Ellipse":
        return Ellipse;
      case "Rect":
        return Rect;
      case "Square":
        return Square;
      case "Arc":
        return Arc;
    }
  };

  const ref = useRef();
  if (ref.current) {
    svgLeft = ref.current.getBoundingClientRect().left;
    svgTop = ref.current.getBoundingClientRect().top;
  }

  useEffect(() => {
    if (Object.keys(positions).length === 4 && activeTool !== "Arc") {
      let addToSvg = React.createElement(toolSelector(), {
        key: activeTool + new Date().getTime(),
        positions: positions,
        gridSnapper: gridSnapper,
        snap: gridStatus.snap,
      });
      setChildrenComponents([...childrenComponents, addToSvg]);
      setPositions({});
    } else if (Object.keys(positions).length === 6) {
      let addToSvg = React.createElement(toolSelector(), {
        key: activeTool + new Date().getTime(),
        positions: positions,
        gridSnapper: gridSnapper,
        snap: gridStatus.snap,
      });
      setChildrenComponents([...childrenComponents, addToSvg]);
      setPositions({});
    }
  }, [positions]);

  useEffect(() => {
    setActiveSnap([]);
  }, [gridStatus.snap]);

  const handleClick = (e) => {
    if (activeTool !== "Select") {
      let posX, posY;

      if (gridStatus.snap) {
        posX = gridSnapper(e).pointX;
        posY = gridSnapper(e).pointY;
      } else {
        posX = e.clientX - svgLeft;
        posY = e.clientY - svgTop;
      }

      if (Object.keys(positions).length === 0) {
        setPositions({ current_x: posX, current_y: posY });
        setActivePosition({
          last_x: posX,
          last_y: posY,
          current_x: posX,
          current_y: posY,
        });
      } else {
        setPositions({
          last_x: positions.current_x,
          last_y: positions.current_y,
          current_x: posX,
          current_y: posY,
        });
        if (activeTool !== "Arc") {
          setActivePosition({});
          setActiveRender([]);
        } else {
          setActivePosition({
            last_x: positions.current_x,
            last_y: positions.current_y,
            current_x: posX,
            current_y: posY,
            radius_x: posX,
            radius_y: posY,
          });
        }
      }
      if (Object.keys(activePositions).length === 6) {
        setPositions({
          ...positions,
          radius_x: posX,
          radius_y: posY,
        });
        setActivePosition({});
        setActiveRender([]);
      }
    }
  };

  const handleMove = (e) => {
    let posX, posY;

    if (gridStatus.snap) {
      posX = gridSnapper(e).pointX;
      posY = gridSnapper(e).pointY;
      gridSnapper(e);
    } else {
      posX = e.clientX - svgLeft;
      posY = e.clientY - svgTop;
    }

    if (Object.keys(activePositions).length === 4) {
      setActivePosition({
        last_x: activePositions.last_x,
        last_y: activePositions.last_y,
        current_x: posX,
        current_y: posY,
      });
      if (activeTool !== "Arc") {
        setActiveRender([
          React.createElement(toolSelector(), {
            key: activeTool + new Date().getTime(),
            positions: activePositions,
          }),
        ]);
      } else {
        setActiveRender([
          React.createElement(ArcLine, {
            key: "ArcLine" + new Date().getTime(),
            positions: activePositions,
          }),
        ]);
      }
    } else if (Object.keys(activePositions).length === 6) {
      setActivePosition({
        last_x: positions.last_x,
        last_y: positions.last_y,
        current_x: activePositions.current_x,
        current_y: activePositions.current_y,
        radius_x: posX,
        radius_y: posY,
      });
      setActiveRender([
        React.createElement(toolSelector(), {
          key: activeTool + new Date().getTime(),
          positions: activePositions,
        }),
      ]);
    }
  };

  const gridSnapper = (e) => {
    let posX = e.clientX - svgLeft;
    let posY = e.clientY - svgTop;
    let gridSize = gridStatus.size / 2;
    let closestX = posX % (gridSize * 2);
    let closestY = posY % (gridSize * 2);
    let pointX, pointY;

    if (closestX <= gridSize && closestY <= gridSize) {
      pointX = posX - closestX;
      pointY = posY - closestY;
    } else if (closestX > gridSize && closestY <= gridSize) {
      pointX = posX - closestX + gridSize * 2;
      pointY = posY - closestY;
    } else if (closestX <= gridSize && closestY > gridSize) {
      pointX = posX - closestX;
      pointY = posY - closestY + gridSize * 2;
    } else if (closestX > gridSize && closestY > gridSize) {
      pointX = posX - closestX + gridSize * 2;
      pointY = posY - closestY + gridSize * 2;
    }
    setActiveSnap([
      <SnapCircle
        key={"SnapCircle" + new Date().getTime()}
        pointX={pointX}
        pointY={pointY}
      />,
    ]);
    return { pointX: pointX, pointY: pointY };
  };

  return (
    <div className="DrawArea">
      <svg
        className="svgArea"
        id="svg-area"
        ref={ref}
        onClick={handleClick}
        onMouseMove={handleMove}
      >
        <g>
          <Grid gridStatus={gridStatus} />
          {activeSnap}
        </g>
        <g>{childrenComponents}</g>
        {activeRender}
      </svg>
      <ElementsMenu childrenComponents={childrenComponents} />
    </div>
  );
};

export default DrawArea;
