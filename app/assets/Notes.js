import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotes = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m7.784 10.326-.971 3.89 3.888-.973 5.834-5.834-2.917-2.916-5.834 5.833ZM19.938 4.007l.972.971a1.375 1.375 0 0 1 0 1.946l-3.035 3.034"
      stroke="currentColor"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m16.535 7.41 3.403-3.403a1.375 1.375 0 0 0 0-1.944l-.972-.973a1.375 1.375 0 0 0-1.944 0l-3.404 3.402M17.188 13.063v6.874a1.375 1.375 0 0 1-1.375 1.375H2.063a1.375 1.375 0 0 1-1.376-1.375V6.188a1.375 1.375 0 0 1 1.375-1.374h6.876"
      stroke="currentColor"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgNotes;
