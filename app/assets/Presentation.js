import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPresentation = (props) => (
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
      d="M0 .688C0 .307.308 0 .688 0h20.625c.38 0 .687.308.687.688v16.5c0 .38-.308.687-.688.687H.688A.687.687 0 0 1 0 17.187V.688Zm1.375.687V16.5h19.25V1.375H1.375ZM11 19.938A1.031 1.031 0 1 0 11 22a1.031 1.031 0 0 0 0-2.063ZM6.417 19.938a1.031 1.031 0 1 0 0 2.062 1.031 1.031 0 0 0 0-2.063ZM15.583 19.938a1.031 1.031 0 1 0 0 2.062 1.031 1.031 0 0 0 0-2.063Z"
      fill="#0074d4"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.683 6.356c.286.25.316.684.067.97L4.35 8.938l1.401 1.61a.687.687 0 1 1-1.037.903L2.919 9.39a.688.688 0 0 1 0-.903l1.794-2.062a.687.687 0 0 1 .97-.068ZM16.317 6.356a.687.687 0 0 1 .97.068l1.794 2.062a.688.688 0 0 1 0 .903l-1.794 2.062a.687.687 0 1 1-1.037-.902l1.401-1.611-1.401-1.612a.687.687 0 0 1 .067-.97Z"
      fill="#0074d4"
    />
  </Svg>
);
export default SvgPresentation;
