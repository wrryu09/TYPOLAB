import React from "react";
import BoxSet from "./BoxSet";
import { FontNameVarSet } from "@/types/types";

type Props = {
  subTitleStyle: string;
  displayFirstSize: number;
  firstInBox: boolean;
  koreanFont: FontNameVarSet;
  setFirstInBox: React.Dispatch<React.SetStateAction<boolean>>;
  displayScndSize: number;
  latinFont: FontNameVarSet;
  scndInBox: boolean;
  setScndInBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoxSection = (props: Props) => {
  return (
    <div className="w-full mb-60">
      <h1 className={props.subTitleStyle}>ADD TO YOUR BOX</h1>
      <div className="flex flex-col items-center gap-y-6">
        {/* 1st set */}
        <BoxSet
          displaySize={props.displayFirstSize}
          isInBox={props.firstInBox}
          font={props.koreanFont}
          setItInBox={props.setFirstInBox}
          boxNum={1}
        />

        {/* 2nd set */}
        <BoxSet
          displaySize={props.displayScndSize}
          font={props.latinFont}
          isInBox={props.scndInBox}
          setItInBox={props.setScndInBox}
          boxNum={2}
        />
      </div>
    </div>
  );
};

export default BoxSection;
