import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClock = (props) => (
  <Svg
    width={63}
    height={63}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.031 31.682a29.318 29.318 0 1 0 58.635 0 29.318 29.318 0 0 0-58.635 0v0Z"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M44.307 31.682H31.35V18.724"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgClock;
