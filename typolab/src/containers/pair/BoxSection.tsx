import React from "react";
import BoxSet from "./BoxSet";
import { FontNameVarSet } from "@/types/types";
import TotheBox from "./TotheBox";

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
      <div className="mb-8">
        <h1 className={`${props.subTitleStyle} mb-2`}>ADD TO YOUR BOX</h1>
        <p>+ 버튼을 눌러 박스에 선택한 글꼴 정보를 저장해 보세요!</p>
        <p>BOX 페이지에서 확인할 수 있습니다.</p>
      </div>
      <div className="mobile:mb-4 mb-8 mobile:py-8 w-full py-20 border-2 border-lightGrey rounded-3xl shadow-xl">
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
      <TotheBox subTitleStyle={props.subTitleStyle} />
    </>
  );
};

export default BoxSection;
