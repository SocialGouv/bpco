import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInfo = (props) => (
  <Svg
    width={21}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5 13.285V10.16M10.5 7.88a.39.39 0 0 0 .39-.39M10.11 7.49a.39.39 0 0 0 .39.39M10.5 7.099a.39.39 0 0 0-.39.39M10.89 7.49a.388.388 0 0 0-.39-.391"
      stroke="currentColor"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.875 10.16c0 8.23-7.22 12.845-8.989 13.855a.78.78 0 0 1-.773 0c-1.768-1.01-8.988-5.628-8.988-13.855a9.375 9.375 0 0 1 18.75 0Z"
      stroke="currentColor"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgInfo;
