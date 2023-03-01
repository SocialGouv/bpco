import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChevronDown = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16 20.5-9-9M25 11.5l-9 9"
    />
  </Svg>
);
export default SvgChevronDown;
