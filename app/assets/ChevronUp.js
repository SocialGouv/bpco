import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgChevronUp = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m16 11.5 9 9M7 20.5l9-9" />
    </G>
  </Svg>
);
export default SvgChevronUp;
