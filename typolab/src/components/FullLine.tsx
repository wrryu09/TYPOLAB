import React from "react";

type LineColor = {
  color: "white" | "yellow" | "black" | "greenGrey" | "darkGreen";
};
const lineColors = {
  white: "h-px w-11/12 bg-white",
  yellow: "h-px w-11/12 bg-yellow",
  black: "h-px w-11/12 bg-black",
  greenGrey: "h-px w-11/12 bg-greenGrey",
  darkGreen: "h-px w-11/12 bg-darkGreen",
};
const FullLine = ({ color }: LineColor): JSX.Element => {
  return <div className={lineColors[color]}></div>;
};

export default FullLine;
