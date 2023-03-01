import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGood = (props) => (
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
      d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16S24.837 0 16 0 0 7.163 0 16Zm2 0C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm21.736-5.388-.022.055a2 2 0 0 1-3.742.076l-.03-.076a1 1 0 1 0-1.885.666 4 4 0 0 0 7.543 0 1 1 0 0 0-1.864-.72Zm-11.679.055.021-.055a1 1 0 0 1 1.865.721 4 4 0 0 1-7.543 0 1 1 0 0 1 1.886-.666l.028.076a2 2 0 0 0 3.743-.076Z"
      fill="currentColor"
    />
    <Path
      d="M20.216 20.566a8 8 0 0 1-8.43.265 1 1 0 1 0-1 1.732 10 10 0 0 0 10.537-.332 1 1 0 1 0-1.107-1.665Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgGood;
