import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBad = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16S24.837 0 16 0 0 7.163 0 16Zm2 0C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Z"
      fill="currentColor"
    />
    <Path
      d="M11.346 24.6c2.603-2.362 6.933-2.2 9.493 0a1 1 0 1 0 1-1.733c-3.24-2.547-8.386-2.684-11.6.067a1 1 0 0 0 1.107 1.665ZM19.96 14.62a1.5 1.5 0 1 0 1.569-1.498l-.07-.002a1.5 1.5 0 0 0-1.499 1.5ZM8.96 14.62a1.5 1.5 0 1 0 1.569-1.498l-.07-.002a1.5 1.5 0 0 0-1.499 1.5ZM8.274 11.447l4.483-.392c.413-.036.71-.493.664-1.021-.046-.529-.418-.928-.831-.891l-4.483.392c-.413.036-.71.493-.663 1.021.046.529.418.928.83.891ZM19.018 10.938l4.482.392c.413.036.785-.363.831-.89.047-.529-.25-.986-.663-1.022l-4.483-.393c-.413-.036-.785.363-.83.891-.047.528.25.986.663 1.022Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgBad;