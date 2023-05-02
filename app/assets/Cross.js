import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCross = (props) => (
  <Svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.953 1.047a.597.597 0 0 1 0 .844L1.891 6.953a.597.597 0 0 1-.844-.844l5.062-5.062a.597.597 0 0 1 .844 0Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.047 1.047a.597.597 0 0 1 .844 0l5.062 5.062a.597.597 0 0 1-.844.844L1.047 1.891a.597.597 0 0 1 0-.844Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgCross;
