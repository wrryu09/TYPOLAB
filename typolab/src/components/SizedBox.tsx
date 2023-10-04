import React from "react";

type Props = {
  height?: number;
  width?: number;
};
/**
 * 
 * @param props rem
 */
const SizedBox = (props: Props) => {
  return (
    <div
      style={{ height: props.height + "rem", width: props.width + "rem" }}
    ></div>
  );
};

export default SizedBox;
