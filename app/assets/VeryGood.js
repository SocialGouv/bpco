import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVeryGood = (props) => (
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
      d="M4.686 27.314A16 16 0 1 1 27.314 4.686 16 16 0 0 1 4.686 27.314ZM6.101 6.1A14 14 0 1 0 25.9 25.9 14 14 0 0 0 6.1 6.1Zm.491 12.123c.285-.147.6-.224.92-.224h16.976a1.999 1.999 0 0 1 1.886 2.666 11 11 0 0 1-20.747 0 2 2 0 0 1 .965-2.442ZM7.512 20l.088.239A9 9 0 0 0 24.488 20H7.512ZM25.6 13.667a4 4 0 0 0-7.543 0 1 1 0 0 0 1.852.75l.034-.084a2 2 0 0 1 3.721-.128l.05.128a1 1 0 1 0 1.886-.666Zm-13.119-1.933a4 4 0 0 1 1.462 1.933 1 1 0 1 1-1.886.666l-.05-.128a2 2 0 0 0-3.721.128l-.035.085a1 1 0 0 1-1.851-.751 4 4 0 0 1 6.081-1.933Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgVeryGood;
