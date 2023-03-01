import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendar2 = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.334 2h2.667c.368 0 .666.298.666.667v10.666a.667.667 0 0 1-.666.667H2a.667.667 0 0 1-.667-.667V2.667c0-.369.298-.667.667-.667h2.666V.667h1.334V2h4V.667h1.333V2Zm-1.333 1.333H6v1.333H4.667V3.333h-2V6h10.667V3.333h-2v1.333h-1.333V3.333Zm3.333 4H2.667v5.333h10.667V7.333Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgCalendar2;
