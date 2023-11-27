import { FontNameVarSet, InferredFont } from "@/types/types";
import React, { SetStateAction, useState } from "react";

type Props = {
  setShowLatinRecModal: React.Dispatch<SetStateAction<boolean>>;
  inferredLatinFont: InferredFont[];
  koreanFont: FontNameVarSet;
  setLatinFont: React.Dispatch<SetStateAction<FontNameVarSet>>;
};

const LatinRecRes = (props: Props) => {
  const [selectedFont, setSelectedFont] = useState<FontNameVarSet>({
    name: "none",
    variants: "none",
  });

  return (
    <div className="absolute flex flex-col z-10 w-full h-full top-0 left-0 items-center justify-center bg-black bg-opacity-80">
      <h2 className="font-Bayon text-6xl pb-8 text-red">Result</h2>
      <div className="w-[90%] p-8 rounded-lg border border-greenGrey bg-fog flex justify-between text-darkGreen">
        <div className="flex w-full justify-between">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="flex gap-2">
              <div>No.</div>
              <div>Font</div>
              <div>Variant</div>
              <div>Score</div>
            </div>
            {props.inferredLatinFont.map((ele, idx) => {
              return (
                <div
                  key={
                    ele.fontName + ele.fontVar + ele.fontScore + "inferredLatin"
                  }
                  className={`${
                    selectedFont.name === ele.fontName &&
                    selectedFont.variants === ele.fontVar
                      ? "text-red"
                      : "text-darkGreen"
                  } flex gap-2`}
                  onClick={() => {
                    setSelectedFont({
                      name: ele.fontName,
                      variants: ele.fontVar,
                    });
                  }}
                >
                  <div>{idx}</div>
                  <div>{ele.fontName}</div>
                  <div>{ele.fontVar}</div>
                  <div>{ele.fontScore}</div>
                </div>
              );
            })}
          </div>
          <div className="flex-col items-end justify-between inline-flex">
            <div className="flex-col justify-end items-end flex text-right">
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=${props.koreanFont.name}`}
              />
              <style>
                {`.koreanFontCss{
font-family: ${props.koreanFont.name};
font-weight: ${props.koreanFont.variants};
}`}
              </style>
              <div className="text-6xl koreanFontCss">안녕하세요</div>
              {selectedFont.name !== "none" ? (
                <>
                  <link
                    rel="stylesheet"
                    href={`https://fonts.googleapis.com/css2?family=${selectedFont.name}`}
                  />
                  <style>
                    {`.latinFontCss{
font-family: ${selectedFont.name};
font-weight: ${selectedFont.variants};
}`}
                  </style>
                </>
              ) : null}

              <div className="text-6xl latinFontCss">TypoLab</div>
            </div>
            <div className="px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex">
              <div
                className="text-center text-white text-7xl font-['Bayon']"
                onClick={() => {
                  props.setShowLatinRecModal(false);
                  props.setLatinFont(selectedFont);
                }}
              >
                ok
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatinRecRes;
