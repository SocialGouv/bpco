import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHearts = (props) => (
  <Svg
    width={23}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.459 13.262a1.74 1.74 0 0 0-2.378-.841l-1.392.692-.641-1.413a1.74 1.74 0 0 0-2.377-.841 1.887 1.887 0 0 0-.87 2.458l1.925 4.21a.53.53 0 0 0 .724.257l4.144-2.064a1.89 1.89 0 0 0 .865-2.458v0ZM8.965 12.87 2.432 8.196a3.29 3.29 0 0 1-1.305-3.62v0a3.289 3.289 0 0 1 5.02-1.81l1.06.726.724-1.06a3.289 3.289 0 0 1 5.335-.13v0a3.29 3.29 0 0 1 .091 3.85L8.965 12.87ZM20.594 7.875a.344.344 0 0 1 .344.344M20.25 8.219a.344.344 0 0 1 .344-.344M20.594 8.563a.344.344 0 0 1-.344-.344"
      stroke="currentColor"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.938 8.219a.344.344 0 0 1-.344.344M2.72 15.438a.344.344 0 0 1 .343.343M2.376 15.781a.344.344 0 0 1 .343-.343M2.72 16.125a.344.344 0 0 1-.344-.344"
      stroke="currentColor"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.063 15.781a.344.344 0 0 1-.344.344M9.938 17.5v2.75M11.313 18.875h-2.75M18.188 1v2.75M19.563 2.375h-2.75"
      stroke="currentColor"
      strokeWidth={1.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgHearts;
