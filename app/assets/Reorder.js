import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReorder = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 7.247h16v.89H0v-.89ZM8 1.47 4.547 5.246h6.889L8 1.47ZM8 15.47l3.436-3.778h-6.89L8 15.469ZM0 9.025h16v.889H0v-.89Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgReorder;
