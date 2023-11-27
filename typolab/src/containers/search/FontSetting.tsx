import { FontNameVarSet } from "@/types/types";
import React from "react";

type Props = {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  visible: boolean;
  min: number;
  max: number;
  fontFamily: FontNameVarSet;
  onChange: (e: EventTarget & HTMLInputElement) => void;
};

const FontSetting = (props: Props) => {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val: number = Number(e.currentTarget.value);
    props.setSize(val);
    props.onChange(e.currentTarget);
  }

  return (
    <div
      className={`flex font-Bayon gap-x-2 ${
        props.visible ? "block" : "hidden"
      }`}
    >
      <p>FONTFAMILY</p>
      <p>{props.fontFamily.name}</p>
      <p>{props.fontFamily.variants}</p>
      <p>SIZE</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        onChange={handleInputChange}
      />
      {props.size}PT
    </div>
  );
};

export default FontSetting;
