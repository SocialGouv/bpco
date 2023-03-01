import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDelete = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.667 1.667V.333h6.667v1.334h3.333V3h-1.333v10a.667.667 0 0 1-.667.667H2.334A.667.667 0 0 1 1.667 13V3H.334V1.667h3.333ZM3.001 3v9.334h8V3H3Zm2 2h1.333v5.334H5.001V5Zm2.666 0h1.334v5.334H7.667V5Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgDelete;
