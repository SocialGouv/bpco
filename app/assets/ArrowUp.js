import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUp = (props) => {
  return (
    <Svg
      width={13}
      height={9}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.038 6.499 1.5 1 7.038l.459.462 5.04-5.076L11.543 7.5 12 7.038Z"
        fill="currentColor"
        stroke="currentColor"
      />
    </Svg>
  );
};
export default SvgArrowUp;
