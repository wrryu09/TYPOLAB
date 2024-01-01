import { FontNameNVar, FontNameVarSet } from "@/types/types";
import React, { SetStateAction, useState } from "react";
import KoreanModalBtn from "./KoreanModalBtn";
import KrSelectionBox from "./KrSelectionBox";

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
    <div className="z-20">
      {/* modal background */}
      <div
        className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80"
        onClick={() => {
          props.setShowFontList(false);
        }}
      />

      {/* modal */}
      <div className="absolute w-11/12 top-6">
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
                    <KrSelectionBox
                      fontName={fontName}
                      idx={idx}
                      selectedFont={selectedFont}
                      selectedVar={selectedVar}
                      setSelectedFont={setSelectedFont}
                      setSelectedVar={setSelectedVar}
                    />
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
