import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgYesterday = (props) => (
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
      d="m10.6 13.8-2.4-2.4L10.6 9"
      stroke="#26387C"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.2 11.4H13a3.2 3.2 0 0 1 3.2 3.2v3.2"
      stroke="#26387C"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgYesterday;
