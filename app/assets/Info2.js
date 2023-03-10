import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInfo2 = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 1.96C6.91 1.96 1.96 6.908 1.96 13c0 6.091 4.95 11.04 11.04 11.04 6.093 0 11.04-4.948 11.04-11.04 0-6.092-4.947-11.04-11.04-11.04Zm0 .96c5.574 0 10.08 4.507 10.08 10.08S18.575 23.08 13 23.08A10.073 10.073 0 0 1 2.92 13C2.92 7.427 7.429 2.92 13 2.92Zm0 3.36a1.44 1.44 0 1 0 .001 2.88 1.44 1.44 0 0 0 0-2.88Zm-1.92 4.8v.96h.96v6.24h-.96v.96h3.84v-.96h-.96v-7.2h-2.88Z"
      fill="#DADADA"
      fillOpacity={0.38}
    />
    <Path
      d="M12 .96C5.91.96.96 5.908.96 12c0 6.091 4.95 11.04 11.04 11.04 6.093 0 11.04-4.948 11.04-11.04C23.04 5.908 18.094.96 12 .96Zm0 .96c5.574 0 10.08 4.507 10.08 10.08S17.575 22.08 12 22.08A10.073 10.073 0 0 1 1.92 12C1.92 6.427 6.429 1.92 12 1.92Zm0 3.36a1.44 1.44 0 1 0 .001 2.88 1.44 1.44 0 0 0 0-2.88Zm-1.92 4.8v.96h.96v6.24h-.96v.96h3.84v-.96h-.96v-7.2h-2.88Z"
      fill="#0074d4"
    />
  </Svg>
);
export default SvgInfo2;
