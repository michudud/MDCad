import "./DrawArea.style.css";
import React, { useState, useEffect, useRef, useContext } from "react";
import Grid from "./AreaElements/Grid";
import SnapCircle from "./AreaElements/SnapCircle";
import ElementsMenu from "../ElementsMenu";
import DrawingSettingsContext from "../../context/DrawingSettingsContext";
import {
  Line,
  Rect,
  Square,
  Circle,
  Ellipse,
  Arc,
  ArcLine,
} from "./DrawingTools";

const DrawArea = () => {
  const [childrenComponents, setChildrenComponents] = useState<
    React.ReactElement[]
  >([]);
  const [positions, setPositions] = useState<{
    last_x?: number;
    last_y?: number;
    current_x: number;
    current_y: number;
    radius_x?: number;
    radius_y?: number;
  } | null>(null);
  const [activePositions, setActivePosition] = useState<{
    last_x: number;
    last_y: number;
    current_x: number;
    current_y: number;
    radius_x?: number;
    radius_y?: number;
  } | null>(null);
  const [activeRender, setActiveRender] = useState<React.ReactElement[]>([]);
  const [activeSnap, setActiveSnap] = useState<React.ReactElement[]>([]);
  const [drawingSettings, _] = useContext(DrawingSettingsContext); // eslint-disable-line no-unused-vars

  const activeTool = drawingSettings.activeTool;
  const gridStatus = {
    status: drawingSettings.gridStatus,
    size: drawingSettings.gridSize,
    snap: drawingSettings.gridSnap,
  };

  let svgLeft: number, svgTop: number;

  const toolSelector = (activeTool: string): any => {
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
    return null;
  };

  const ref = useRef<SVGSVGElement>(null);
  if (ref.current) {
    svgLeft = ref.current.getBoundingClientRect().left;
    svgTop = ref.current.getBoundingClientRect().top;
  }

  useEffect(() => {
    if (
      positions &&
      Object.keys(positions).length === 4 &&
      activeTool !== "Arc"
    ) {
      const addToSvg = React.createElement(toolSelector(activeTool), {
        key: activeTool + new Date().getTime(),
        positions: positions,
      });
      setChildrenComponents([...childrenComponents, addToSvg]);
      setPositions(null);
    } else if (positions && Object.keys(positions).length === 6) {
      const addToSvg = React.createElement(toolSelector(activeTool), {
        key: activeTool + new Date().getTime(),
        positions: positions,
      });
      setChildrenComponents([...childrenComponents, addToSvg]);
      setPositions(null);
    }
  }, [positions]);

  useEffect(() => {
    setActiveSnap([]);
  }, [gridStatus.snap]);

  const handleClick = (e: React.MouseEvent<SVGElement>) => {
    if (activeTool !== "Select") {
      let posX: number, posY: number;
      if (gridStatus.snap) {
        posX = gridSnapper(e).pointX;
        posY = gridSnapper(e).pointY;
      } else {
        posX = e.clientX - svgLeft;
        posY = e.clientY - svgTop;
      }

      if (positions === null) {
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
          setActivePosition(null);
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

      if (activePositions && positions) {
        if (Object.keys(activePositions).length === 6) {
          setPositions({
            ...positions,
            radius_x: posX,
            radius_y: posY,
          });
          setActivePosition(null);
          setActiveRender([]);
        }
      }
    }
  };

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    let posX: number, posY: number;

    if (gridStatus.snap) {
      posX = gridSnapper(e).pointX;
      posY = gridSnapper(e).pointY;
      gridSnapper(e);
    } else {
      posX = e.clientX - svgLeft;
      posY = e.clientY - svgTop;
    }
    if (activePositions) {
      if (Object.keys(activePositions).length === 4) {
        if (activePositions) {
          setActivePosition({
            last_x: activePositions.last_x,
            last_y: activePositions.last_y,
            current_x: posX,
            current_y: posY,
          });
        }
        if (activeTool !== "Arc") {
          setActiveRender([
            React.createElement(toolSelector(activeTool), {
              key: activeTool + new Date().getTime(),
              positions: activePositions,
            }),
          ]);
        } else {
          if (activePositions) {
            setActiveRender([
              React.createElement(ArcLine, {
                key: "ArcLine" + new Date().getTime(),
                positions: activePositions,
              }),
            ]);
          }
        }
      } else if (Object.keys(activePositions).length === 6) {
        if (positions?.last_x && positions.last_y && activePositions) {
          setActivePosition({
            last_x: positions.last_x,
            last_y: positions.last_y,
            current_x: activePositions.current_x,
            current_y: activePositions.current_y,
            radius_x: posX,
            radius_y: posY,
          });
        }
        setActiveRender([
          React.createElement(toolSelector(activeTool), {
            key: activeTool + new Date().getTime(),
            positions: activePositions,
          }),
        ]);
      }
    }
  };

  const gridSnapper = (e: React.MouseEvent<SVGElement>) => {
    const posX = e.clientX - svgLeft;
    const posY = e.clientY - svgTop;
    const gridSize = gridStatus.size / 2;
    const closestX = posX % (gridSize * 2);
    const closestY = posY % (gridSize * 2);
    let pointX = 0,
      pointY = 0;

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
