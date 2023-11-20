import { FontNameNVar } from "@/types/types";
import React, { SetStateAction } from "react";

type Props = {
  fontList: FontNameNVar[];
  setFont: React.Dispatch<SetStateAction<FontNameNVar>>;
  putFontData: (fontName: string) => void;
  setShowFontList: React.Dispatch<SetStateAction<boolean>>;
};

const SelectFontModal = (props: Props) => {
  return (
    <div className="border-greenGrey">
      <p>폰트 선택</p>
      {props.fontList.map((fontName, idx) => {
        return (
          <div
            key={fontName.name + fontName.variants + idx}
            onClick={() => {
              props.setFont(fontName);
              // 해당하는 폰트 정보 불러오기
              props.putFontData(fontName.name);
              // 폰트 선택 리스트 닫기
              props.setShowFontList(false);
            }}
          >
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${fontName.name}`}
            />
            <style>
              {`.fontFamilykoreanFontListCss${idx}{
font-family: ${fontName.name};
}
.fontWeight{
font-weight: ${fontName.variants};
}
}`}
            </style>
            <p className={`fontFamilykoreanFontListCss${idx}`}>
              {fontName.name} {fontName.variants}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SelectFontModal;
