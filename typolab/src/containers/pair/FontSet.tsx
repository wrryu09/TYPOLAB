import { FontInfoFromDB, FontNameVarSet } from "@/types/types";
import React from "react";

type Props = {
  setShowFontList: React.Dispatch<React.SetStateAction<boolean>>;
  showFontList: boolean;
  saveFontList?: () => void;
  Font: FontNameVarSet;
  selectedInfo: FontInfoFromDB;
  fontSetNum: 1 | 2;
};

const FontSet = (props: Props) => {
  return (
    <div
      onClick={() => {
        props.setShowFontList(!props.showFontList);
        if (props.saveFontList) {
          props.saveFontList();
        }
      }}
    >
      {props.Font.name === "none" ? (
        <div className="mobile:py-4 mobile:px-6 hover:bg-red flex text-white bg-darkGreen px-12 py-6 rounded-full justify-center items-center shadow-lg">
          <h1 className="mobile:text-xl text-4xl font-semibold">
            {props.fontSetNum === 1 ? "한글 폰트 선택하기" : "추천 영문 폰트"}
          </h1>
        </div>
      ) : (
        <div className="mobile:text-sm flex flex-col items-start">
          {props.fontSetNum === 1 ? "국문 폰트" : "영문 폰트"}
          <h1
            className={`mobile:text-2xl text-4xl fontFamily${props.fontSetNum}FontFam`}
          >
            {props.Font.name} {props.Font.variants}
          </h1>
          <div className="mobile:text-sm flex gap-2">
            {props.selectedInfo.classifications.map((classifi) => {
              return (
                <p key={props.selectedInfo.family + classifi}>{classifi}</p>
              );
            })}
            <p>{props.selectedInfo.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FontSet;
