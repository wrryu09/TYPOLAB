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
    <>
      <h1 className={`${props.subTitleStyle} mb-10 mobile:mb-4`}>ADD TO YOUR BOX</h1>
      <div className="mobile:mb-20 mobile:py-8 w-full py-20 mb-60 bg-gradient-to-tr from-[#4f93ab0b] to-[#b66f441f] border-2 border-lightGrey rounded-3xl shadow-xl">
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
    </>
  );
};

export default BoxSection;
