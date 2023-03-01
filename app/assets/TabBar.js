import * as React from "react";
import Svg, { G, Mask, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgTabBar = (props) => (
  <Svg
    width={375}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#tabBar_svg__a)">
      <Mask id="tabBar_svg__b" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M157.995 6.69c-.966-3.65-3.976-6.69-7.753-6.69H0a1 1 0 0 0-1 1v58a1 1 0 0 0 1 1h375a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H223.758c-3.777 0-6.787 3.04-7.753 6.69C212.609 19.534 200.91 29 187 29c-13.91 0-25.609-9.467-29.005-22.31Z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M157.995 6.69c-.966-3.65-3.976-6.69-7.753-6.69H0a1 1 0 0 0-1 1v58a1 1 0 0 0 1 1h375a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H223.758c-3.777 0-6.787 3.04-7.753 6.69C212.609 19.534 200.91 29 187 29c-13.91 0-25.609-9.467-29.005-22.31Z"
        fill="#fff"
      />
      <Path
        d="m216.005 6.69-.967-.255.967.256Zm-58.01 0 .967-.255-.967.256ZM0 1h150.242v-2H0v2Zm0 0v-2a2 2 0 0 0-2 2h2Zm0 58V1h-2v58h2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm375 0H0v2h375v-2Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-58v58h2V1h-2Zm0 0h2a2 2 0 0 0-2-2v2ZM223.758 1H375v-2H223.758v2Zm-8.72 5.435C211.755 18.85 200.445 28 187 28v2c14.375 0 26.463-9.784 29.972-23.054l-1.934-.51ZM187 28c-13.445 0-24.755-9.15-28.038-21.565l-1.934.511C160.537 20.216 172.625 30 187 30v-2Zm36.758-29c-4.356 0-7.674 3.48-8.72 7.435l1.934.511C217.857 3.6 220.561 1 223.758 1v-2Zm-73.516 2c3.197 0 5.901 2.6 6.786 5.946l1.934-.51C157.916 2.48 154.598-1 150.242-1v2Z"
        fill="#D5F6F9"
        mask="url(#tabBar_svg__b)"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgTabBar;
