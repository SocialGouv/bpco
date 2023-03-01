import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExportData = (props) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 20 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.75 15.011 10 18.761l-3.75-3.75M10 18.761v-9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.75 4.511h3.75a1.5 1.5 0 0 1 1.5 1.5v15.75a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5V6.011a1.5 1.5 0 0 1 1.5-1.5h3.75a3.75 3.75 0 1 1 7.5 0v0Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 3.761a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgExportData;
