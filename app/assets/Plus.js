import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgPlus = (props) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={25} fill="#1FC6D5" />
    <Path
      d="M26.213 17.692a1.213 1.213 0 1 0-2.426 0v16.616a1.213 1.213 0 0 0 2.426 0V17.692Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.042}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.692 24.787a1.213 1.213 0 1 0 0 2.426h16.616a1.213 1.213 0 0 0 0-2.426H16.692Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.042}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgPlus;
