import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEdit = (props) => (
  <Svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9.215 11.784 2.1c.26.26.26.682 0 .942L2.83 12H0V9.171L8.957.215c.26-.26.682-.26.942 0Zm-2.357 3.3-6.21 6.21v.942h.943l6.21-6.21-.943-.942Zm1.885-1.886-.943.943.943.943.943-.943-.943-.943Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgEdit;
