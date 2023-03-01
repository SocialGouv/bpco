import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMiddle = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16Zm0-30C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2ZM8.5 14a1.5 1.5 0 1 0 1.569-1.498l-.07-.002A1.5 1.5 0 0 0 8.5 14Zm11 0a1.5 1.5 0 1 0 1.569-1.498l-.07-.002A1.5 1.5 0 0 0 19.5 14Z"
      fill="currentColor"
    />
    <Path
      d="M12.84 23.12h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgMiddle;
