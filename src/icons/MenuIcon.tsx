const MenuIcon = ({ tool }: { tool: string }): JSX.Element | null => {
  switch (tool) {
    case "Line":
      return (
        <g>
          <line
            x1="30"
            y1="70"
            x2="90"
            y2="30"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            cx="30"
            cy="70"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="30"
            cy="70"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="90"
            cy="30"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="90"
            cy="30"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Line
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Circle":
      return (
        <g>
          <circle
            cx="60"
            cy="50"
            r="30"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="50"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="60"
            cy="50"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="78"
            cy="26"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="78"
            cy="26"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Circle
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Ellipse":
      return (
        <g>
          <ellipse
            cx="60"
            cy="50"
            rx="35"
            ry="20"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="50"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="60"
            cy="50"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="85"
            cy="36"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="85"
            cy="36"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Ellipse
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Rect":
      return (
        <g>
          <rect
            x="30"
            y="30"
            width="60"
            height="40"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="30"
            cy="30"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="30"
            cy="30"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="90"
            cy="70"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="90"
            cy="70"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Rect
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Square":
      return (
        <g>
          <rect
            x="40"
            y="30"
            width="40"
            height="40"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="30"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="40"
            cy="30"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="80"
            cy="70"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="80"
            cy="70"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Square
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Arc":
      return (
        <g>
          <path
            d="M 30 70 A 20 20, 0, 0, 1, 90 50"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="30"
            cy="70"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="30"
            cy="70"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="90"
            cy="50"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="90"
            cy="50"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <circle
            cx="50"
            cy="30"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="50"
            cy="30"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Arc
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Select":
      return (
        <g>
          <path
            d="M 40 30 L 47 63 L 55 55 L 70 70 L 80 60 L 65 45 L 73 37 L 40 30"
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          <circle
            cx="40"
            cy="30"
            r="5"
            stroke="red"
            strokeWidth="2"
            fill="white"
          />
          <circle
            cx="40"
            cy="30"
            r="1"
            stroke="red"
            strokeWidth="2"
            fill="red"
          />
          <text y="105" x="50%" textAnchor="middle">
            Select
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Save":
      return (
        <g>
          <path
            d="M 30 80 L 30 20 L 80 20 L 90 30 L 90 80 L 30 80"
            stroke="black"
            strokeWidth="2"
            fill="#0094FF"
          />
          <path
            d="M 45 21 L 45 35 L 75 35 L 75 21 M 40 79 L 40 50 L 80 50 L 80 79 M 45 55 L 75 55 M 50 60 L 70 60 M 45 65 L 75 65 M 50 70 L 70 70 M 45 75 L 75 75"
            stroke="black"
            strokeWidth="2"
            fill="white"
          />
          <rect
            x="65"
            y="23"
            width="5"
            height="9"
            stroke="black"
            strokeWidth="2"
            fill="black"
          />
          <text y="105" x="50%" textAnchor="middle">
            Save
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "Clear":
      return (
        <g>
          <line
            x1="33"
            y1="77"
            x2="87"
            y2="23"
            stroke="black"
            strokeWidth="12"
            strokeLinecap="square"
          />
          <line
            x1="33"
            y1="23"
            x2="87"
            y2="77"
            stroke="black"
            strokeWidth="12"
            strokeLinecap="square"
          />
          <line x1="30" y1="80" x2="90" y2="20" stroke="red" strokeWidth="8" />
          <line x1="30" y1="20" x2="90" y2="80" stroke="red" strokeWidth="8" />
          <text y="105" x="50%" textAnchor="middle">
            Clear
          </text>
          <rect x="0" y="0" width="120" height="118" fill="transparent" />
        </g>
      );
    case "OptionsLeftArrow":
      return (
        <g>
          <circle cx="9" cy="9" r="8" fill="lightgrey" />
          <polyline
            points="12,5 6,9 12,13"
            fill="none"
            stroke="grey"
            strokeWidth="2"
          />
        </g>
      );
    case "OptionsRightArrow":
      return (
        <g>
          <circle cx="9" cy="9" r="8" fill="grey" />
          <polyline
            points="6,5 12,9 6,13"
            fill="none"
            stroke="lightgrey"
            strokeWidth="2"
          />
        </g>
      );
  }
  return null;
};
export default MenuIcon;
