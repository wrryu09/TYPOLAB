import React from "react";

type LineColor = {
  color: "white" | "yellow" | "black" | "greenGrey" | "darkGreen";
};
const lineColors = {
  white: "h-px w-full bg-white",
  yellow: "h-px w-full bg-yellow",
  black: "h-px w-full bg-black",
  greenGrey: "h-px w-full bg-greenGrey",
  darkGreen: "h-px w-full bg-darkGreen",
};
const FullLine = ({ color }: LineColor): JSX.Element => {
  return <div className={lineColors[color]}></div>;
};

export default FullLine;
