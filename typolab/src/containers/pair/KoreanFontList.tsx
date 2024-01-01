import { FontNameNVar, FontNameVarSet } from "@/types/types";
import React, { SetStateAction, useState } from "react";
import KoreanModalBtn from "./KoreanModalBtn";

type Props = {
  fontList: FontNameNVar[];
  setFont: React.Dispatch<SetStateAction<FontNameVarSet>>;
  putFontData: (fontName: string) => void;
  setShowFontList: React.Dispatch<SetStateAction<boolean>>;
};

const KoreanFontList = (props: Props) => {
  const [selectedFont, setSelectedFont] = useState<FontNameNVar>({
    name: "none",
    variants: ["regular"],
  });
  const [selectedVar, setSelectedVar] = useState<string>("regular");

  return (
    <div>
      {/* modal background */}
      <div
        className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-80"
        onClick={() => {
          props.setShowFontList(false);
        }}
      />

      {/* modal */}
      <div className="absolute w-10/12 left-1/2 top-6 -translate-x-1/2 translate-y-0">
        {/* CHOOSE YOUR FONT */}
        <h2 className="mobile:text-4xl mobile:p-4 font-Bayon text-6xl p-8 text-white">
          Choose your font
        </h2>

        <div
          className={`mobile:w-full mobile:p-4 w-[90%] h-fit p-8 rounded-lg border border-greenGrey bg-fog flex flex-col items-center`}
        >
          <div className="flex flex-col mb-12">
            {/* font preview */}
            {/* <div className="flex-col flex">
              <div className="flex-col text-center">
                {selectedFont.name !== "none" ? (
                  <>
                    <link
                      rel="stylesheet"
                      href={`https://fonts.googleapis.com/css2?family=${selectedFont.name}`}
                    />
                    <style>
                      {`.disPlayKrFont{
font-family: ${selectedFont.name};
font-weight: ${selectedVar};
}`}
                    </style>
                    <div className="mobile:text-5xl mobile:mb-10 text-6xl disPlayKrFont mb-12">
                      TypoLab
                    </div>
                  </>
                ) : null}
              </div>
            </div> */}

            {/* font family */}
            <div>
              <div className="text-greenGrey font-Bayon text-xl mb-2">
                Font Family
              </div>
              <div className="flex flex-wrap justify-start items-start gap-2 mb-6">
                {props.fontList.map((fontName, idx) => {
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
                            selectedFont.name === fontName.name
                              ? "text-red"
                              : "text-darkGreen"
                          } text-sm `}
                        >
                          {fontName.name}
                        </p>

                        {/* 다람쥐 */}
                        <p
                          className={`fontFamilykoreanFontListCss${idx} ${
                            selectedFont.name === fontName.name
                              ? "text-red"
                              : "text-darkGreen"
                          }`}
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
                                    selectedVar === variant
                                      ? "bg-red"
                                      : "bg-darkGreen"
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
                        className={`text-fog bg-black px-2.5 py-1.5 rounded-full text-sm font-semibold ${
                          selectedFont.name === fontName.name
                            ? "bg-greenGrey"
                            : "bg-darkGreen"
                        }`}
                        onClick={() => {
                          setSelectedFont(fontName);
                          if (fontName.variants.length > 0) {
                            setSelectedVar(fontName.variants[0]);
                          }
                        }}
                      >
                        선택
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* OK Btn */}
          <KoreanModalBtn
            putFontData={props.putFontData}
            selectedFont={selectedFont}
            selectedVar={selectedVar}
            setFont={props.setFont}
            setShowFontList={props.setShowFontList}
          />
        </div>
      </div>
    </div>
  );
};

export default KoreanFontList;
