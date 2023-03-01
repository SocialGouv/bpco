import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgToday = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1 13a12 12 0 1 0 24 0 12 12 0 0 0-24 0v0Z"
      stroke="#26387C"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.286 13a1.714 1.714 0 1 0 3.428 0 1.714 1.714 0 0 0-3.428 0v0ZM13 11.286v-6M14.213 14.213l3.073 3.073"
      stroke="#26387C"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgToday;
