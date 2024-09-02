import { FontNameNVar } from "@/types/types";
import React, { SetStateAction } from "react";

type KrSelectionBoxProps = {
  fontName: FontNameNVar;
  idx: number;
  selectedVar: string;
  selectedFont: FontNameNVar;
  setSelectedVar: React.Dispatch<SetStateAction<string>>;
  handleSelectFont: ({ name, variants }: FontNameNVar) => void;
};

const KrSelectionBox = ({
  fontName,
  idx,
  selectedVar,
  selectedFont,
  setSelectedVar,
  handleSelectFont,
}: KrSelectionBoxProps) => {
  return (
    <div
      key={fontName.name + fontName.variants + idx}
      className="flex w-full justify-between items-center border border-lightGrey rounded-md mobile:text-xs py-2.5 px-4"
    >
      {fontName.name !== "none" ? (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${fontName.name}`}
        />
      ) : null}
      <style>
        {`.fontFamilykoreanFontListCss${idx}{
font-family: ${fontName.name};
font-weight: ${selectedVar};
}`}
      </style>
      <div className="flex flex-col items-start">
        {/* 폰트명 */}
        <p
          className={`fontFamilykoreanFontListCss${idx} ${
            selectedFont.name === fontName.name ? "text-red" : "text-darkGreen"
          } text-sm `}
        >
          {fontName.name}
        </p>

        {/* 다람쥐 */}
        <p
          className={`fontFamilykoreanFontListCss${idx} ${
            selectedFont.name === fontName.name ? "text-red" : "text-darkGreen"
          } text-left break-keep`}
        >
          타이포랩! 다람쥐 헌 쳇바퀴에 타고파
        </p>
        {selectedFont.name === fontName.name ? (
          <div className="flex flex-wrap justify-start items-start gap-2">
            {/* variants */}
            {selectedFont.variants.map((variant) => {
              return (
                <div
                  key={selectedFont + variant + "selectVar"}
                  className={`${
                    selectedVar === variant ? "bg-red" : "bg-darkGreen"
                  } px-2.5 py-0.5 mt-2 text-white rounded-full`}
                  onClick={() => {
                    setSelectedVar(variant);
                  }}
                >
                  {variant}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {/* 선택 버튼 */}
      <div
        className={`text-fog bg-black px-2.5 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${
          selectedFont.name === fontName.name ? "bg-greenGrey" : "bg-darkGreen"
        }`}
        onClick={() => {
          handleSelectFont({
            name: fontName.name,
            variants: fontName.variants,
          });
          if (fontName.variants.length > 0) {
            setSelectedVar(fontName.variants[0]);
          }
        }}
      >
        선택
      </div>
    </div>
  );
};

export default KrSelectionBox;
