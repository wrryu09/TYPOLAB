import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  type: "row" | "col";
};

const Wrapper = ({ children, type }: WrapperProps) => {
  if (type === "col") {
    return <div className="flex flex-col">{children}</div>;
  } else {
    return <div className="flex flex-row">{children}</div>;
  }
};

export default Wrapper;
