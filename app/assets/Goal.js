import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGoal = (props) => (
  <Svg
    width={16}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5a8 8 0 1 1 0 16A8 8 0 0 1 8 5Zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 8 7Zm0 1.5 1.323 2.68 2.957.43-2.14 2.085.505 2.946L8 15.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L8 8.5ZM14 0v3l-1.363 1.138A9.935 9.935 0 0 0 9 3.049V0h5ZM7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L2 3V0l5-.001Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgGoal;
