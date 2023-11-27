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
        <div className="flex flex-col items-start">
          <h1 className="text-4xl">국문 폰트 선택</h1>
          <p>선택 가능 폰트 보기</p>
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <h1 className={`text-4xl fontFamily${props.fontSetNum}FontFam`}>
            {props.Font.name} {props.Font.variants}
          </h1>
          <div className="flex gap-2">
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
