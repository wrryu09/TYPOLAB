import { FontNameVarSet, InferredFont } from "@/types/types";
import React, { SetStateAction, useState } from "react";

type Props = {
  setShowLatinRecModal: React.Dispatch<SetStateAction<boolean>>;
  inferredLatinFont: InferredFont[];
  koreanFont: FontNameVarSet;
  setLatinFont: React.Dispatch<SetStateAction<FontNameVarSet>>;
  putFontData: (fontName: string) => void;
};

const LatinRecRes = (props: Props) => {
  const [selectedFont, setSelectedFont] = useState<FontNameVarSet>({
    name: "none",
    variants: "none",
  });

  return (
    <div className="absolute flex flex-col z-10 w-full h-full top-0 left-0 items-center justify-center bg-black bg-opacity-80">
      <h2 className="mobile:text-4xl mobile:pb-4 font-Bayon text-6xl pb-8 text-red">
        Result
      </h2>
      <div className="w-[90%] p-8 rounded-lg border border-greenGrey bg-fog flex justify-between text-darkGreen">
        <div className="mobile:flex-col flex w-full justify-between">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="mobile:text-lg flex gap-2 text-greenGrey font-Bayon text-xl mb-4">
              <div>No.</div>
              <div>Font</div>
              <div>Variant</div>
              <div>Score</div>
            </div>
            {props.inferredLatinFont.map((ele, idx) => {
              return (
                <>
                  {ele.fontName !== "none" ? (
                    <link
                      rel="stylesheet"
                      href={`https://fonts.googleapis.com/css2?family=${ele.fontName}`}
                    />
                  ) : null}
                  <style>
                    {`.fontFamilylatinFontListCss${idx}{
font-family: ${ele.fontName};
}`}
                  </style>
                  <div
                    key={
                      ele.fontName +
                      ele.fontVar +
                      ele.fontScore +
                      "inferredLatin"
                    }
                    className={`mobile:text-sm ${
                      selectedFont.name === ele.fontName &&
                      selectedFont.variants === ele.fontVar
                        ? "text-red"
                        : "text-darkGreen"
                    } flex gap-2 fontFamilylatinFontListCss${idx}`}
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
                    <div>{ele.fontScore.toFixed(3)}%</div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="mobile:items-center flex-col items-end justify-between inline-flex">
            <div className="mobile:text-center flex-col justify-end items-end flex text-right">
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
              <div className="mobile:text-5xl mobile:mt-10 mobile:mb-4 text-6xl koreanFontCss pb-4">
                타이포랩!
              </div>
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
                  <div className="mobile:text-5xl mobile:mb-6 text-6xl latinFontCss">
                    TypoLab!
                  </div>
                </>
              ) : null}
            </div>

            {/* OK Btn */}
            {selectedFont.name !== "none" ? (
              <div
                className="mobile:w-full hover:bg-red px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex"
                onClick={() => {
                  if (selectedFont.name !== "none") {
                    props.setLatinFont(selectedFont);
                    props.putFontData(selectedFont.name);
                  }
                  props.setShowLatinRecModal(false);
                }}
              >
                <div className="text-center text-white text-7xl font-['Bayon']">
                  ok
                </div>
              </div>
            ) : (
              <div
                className="hover:bg-red px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex"
                onClick={() => {
                  props.setShowLatinRecModal(false);
                }}
              >
                <div className="text-center text-white text-7xl font-['Bayon']">
                  ClOSE
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatinRecRes;
