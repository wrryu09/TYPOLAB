import { FontNameNVar } from "@/types/types";
import React, { SetStateAction } from "react";

type Props = {
  fontName: FontNameNVar;
  idx: number;
  selectedVar: string;
  selectedFont: FontNameNVar;
  setSelectedVar: React.Dispatch<SetStateAction<string>>;
  setSelectedFont: React.Dispatch<SetStateAction<FontNameNVar>>;
};

const KrSelectionBox = (props: Props) => {
  return (
    <div
      key={props.fontName.name + props.fontName.variants + props.idx}
      className="flex w-full justify-between items-center border border-lightGrey rounded-md mobile:text-xs py-2.5 px-4"
    >
      {props.fontName.name !== "none" ? (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${props.fontName.name}`}
        />
      ) : null}
      <style>
        {`.fontFamilykoreanFontListCss${props.idx}{
font-family: ${props.fontName.name};
font-weight: ${props.selectedVar};
}`}
      </style>
      <div className="flex flex-col items-start">
        {/* 폰트명 */}
        <p
          className={`fontFamilykoreanFontListCss${props.idx} ${
            props.selectedFont.name === props.fontName.name
              ? "text-red"
              : "text-darkGreen"
          } text-sm `}
        >
          {props.fontName.name}
        </p>

        {/* 다람쥐 */}
        <p
          className={`fontFamilykoreanFontListCss${props.idx} ${
            props.selectedFont.name === props.fontName.name
              ? "text-red"
              : "text-darkGreen"
          } text-left break-keep`}
        >
          타이포랩! 다람쥐 헌 쳇바퀴에 타고파
        </p>
        {props.selectedFont.name === props.fontName.name ? (
          <div className="flex flex-wrap justify-start items-start gap-2">
            {/* variants */}
            {props.selectedFont.variants.map((variant) => {
              return (
                <div
                  key={props.selectedFont + variant + "selectVar"}
                  className={`${
                    props.selectedVar === variant ? "bg-red" : "bg-darkGreen"
                  } px-2.5 py-0.5 mt-2 text-white rounded-full`}
                  onClick={() => {
                    props.setSelectedVar(variant);
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
          props.selectedFont.name === props.fontName.name
            ? "bg-greenGrey"
            : "bg-darkGreen"
        }`}
        onClick={() => {
          props.setSelectedFont(props.fontName);
          if (props.fontName.variants.length > 0) {
            props.setSelectedVar(props.fontName.variants[0]);
          }
        }}
      >
        선택
      </div>
    </div>
  );
};

export default KrSelectionBox;
