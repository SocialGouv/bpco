import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBurgerBadge = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 22.5c0-.828.304-1.5.679-1.5H18.32c.375 0 .679.672.679 1.5s-.304 1.5-.679 1.5H.68C.304 24 0 23.328 0 22.5ZM0 15.5c0-.828.304-1.5.679-1.5H18.32c.375 0 .679.672.679 1.5s-.304 1.5-.679 1.5H.68C.304 17 0 16.328 0 15.5ZM0 8.5C0 7.672.304 7 .679 7H18.32c.375 0 .679.672.679 1.5s-.304 1.5-.679 1.5H.68C.304 10 0 9.328 0 8.5Z"
      fill="#26387C"
    />
  </Svg>
);
export default SvgBurgerBadge;
