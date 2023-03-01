import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlus2 = (props) => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 6.5v-6h2v6h6v2h-6v6h-2v-6h-6v-2h6Z"
      fill="#000091"
    />
  </Svg>
);
export default SvgPlus2;
