import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgImportant = (props) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 20.5c-5.523 0-10-4.477-10-10S4.477.5 10 .5s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18.5Zm-1-5h2v2H9v-2Zm0-8h2v6H9v-6Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgImportant;
