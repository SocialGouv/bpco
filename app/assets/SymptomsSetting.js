import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSymptomsSetting = (props) => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.75 7.761h13.5v16.5h-13.5v-16.5Z"
      stroke="#0074d4"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.75 21.261h-3a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v1.5"
      stroke="#0074d4"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.25 18.261h-3a1.5 1.5 0 0 1-1.5-1.5v-13.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v1.5M18.25 12.261h3M13.75 11.511l.75.75 1.5-1.5M18.25 16.761h3M13.75 16.011l.75.75 1.5-1.5M18.25 21.261h3M13.75 20.511l.75.75 1.5-1.5"
      stroke="#0074d4"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSymptomsSetting;
