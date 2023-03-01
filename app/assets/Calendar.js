import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendar = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.75 3.75h22.5v19.5H.75V3.75ZM6.75 6V.75M17.25 6V.75"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.25 14.25h4.5v4.5h-4.5v-4.5ZM14.25 9.75v9M9.75 9.75h9v9h-9v-9ZM9.75 14.25h9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCalendar;
