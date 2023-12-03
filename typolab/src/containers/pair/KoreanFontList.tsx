import { FontNameNVar, FontNameVarSet } from "@/types/types";
import React, { SetStateAction, useState } from "react";

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
            {/* font family */}
            <div>
              <div className="text-greenGrey font-Bayon text-xl mb-4">
                Font Family
              </div>
              <div className="flex flex-wrap justify-start items-start gap-2 mb-12">
                {props.fontList.map((fontName, idx) => {
                  return (
                    <div
                      key={fontName.name + fontName.variants + idx}
                      className="mobile:py-1 mobile:px-2 mobile:text-xs py-2 px-4"
                      onClick={() => {
                        setSelectedFont(fontName);
                      }}
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
}`}
                      </style>
                      <p
                        className={`fontFamilykoreanFontListCss${idx} ${
                          selectedFont.name === fontName.name
                            ? "text-red"
                            : "text-darkGreen"
                        }`}
                      >
                        {fontName.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* variants */}
            <div className="text-greenGrey font-Bayon text-xl mb-4">
              Variants
            </div>
            <div className="flex justify-start items-start gap-4">
              {selectedFont.variants.map((variant) => {
                return (
                  <div
                    key={selectedFont + variant + "selectVar"}
                    className={`${
                      selectedVar === variant ? "text-red" : "text-darkGreen"
                    }`}
                    onClick={() => {
                      setSelectedVar(variant);
                    }}
                  >
                    {variant}
                  </div>
                );
              })}
            </div>
          </div>

          {/* font preview */}
          <div className="flex-col items-end justify-between inline-flex">
            <div className="flex-col justify-end items-end flex text-right">
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
                  <div className="mobile:text-5xl mobile:mb-10 text-6xl disPlayKrFont mb-20">
                    TypoLab
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* OK Btn */}
          {selectedFont.name !== "none" ? (
            <div
              className={`mobile:w-full hover:bg-red w-10/12 px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex`}
              onClick={() => {
                // set font if only selected
                if (selectedFont.name !== "none") {
                  props.setFont({
                    name: selectedFont.name,
                    variants: selectedVar,
                  });
                  props.putFontData(selectedFont.name);
                }
                props.setShowFontList(false);
              }}
            >
              <div className="text-center text-white text-7xl font-['Bayon']">
                ok
              </div>
            </div>
          ) : (
            <div
              className={`mobile:w-full hover:bg-red px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex`}
              onClick={() => {
                props.setShowFontList(false);
              }}
            >
              <div className="text-center text-white text-7xl font-['Bayon']">
                close
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KoreanFontList;
