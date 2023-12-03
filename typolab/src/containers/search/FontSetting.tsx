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
      className={`mobile:flex-col flex font-Bayon gap-x-8 ${
        props.visible ? "block" : "hidden"
      }`}
    >
      <div className="flex gap-x-2 whitespace-nowrap">
        <p>FONTFAMILY</p>
        <p>{props.fontFamily.name}</p>
        <p>{props.fontFamily.variants}</p>
      </div>

      <div className="w-full flex gap-x-2">
        <p>SIZE</p>
        <input
          type="range"
          className="w-full"
          min={props.min}
          max={props.max}
          onChange={handleInputChange}
        />
        {props.size}PT
      </div>
    </div>
  );
};

export default FontSetting;
