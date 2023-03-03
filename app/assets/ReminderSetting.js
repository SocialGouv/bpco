import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReminderSetting = (props) => (
  <Svg
    width={24}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 13.75a9 9 0 1 0 18.001 0A9 9 0 0 0 3 13.75v0ZM6 24.25l1.386-2.771M12 13.75H8.609M12 8.5v5.25M1.5 4.75l3.75-3M18 24.25l-1.386-2.772M22.5 4.75l-3.75-3"
      stroke="#0074d4"
      strokeWidth={1.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgReminderSetting;
