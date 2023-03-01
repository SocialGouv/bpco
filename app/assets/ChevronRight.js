import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChevronRight = (props) => (
  <Svg
    width={6}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.78 4.5.48 1.2l.943-.943L5.666 4.5 1.423 8.743.48 7.8l3.3-3.3Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgChevronRight;
