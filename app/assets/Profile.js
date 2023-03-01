import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 0a5.333 5.333 0 100 10.667A5.333 5.333 0 0012 0zm0 14.667c-4.005 0-12 2.01-12 6v2C0 23.403.597 24 1.333 24h21.334c.736 0 1.333-.597 1.333-1.333v-2c0-3.99-7.995-6-12-6z"
        fill="#1FC6D5"
      />
    </Svg>
  );
}

export default SvgComponent;
