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
    <div className="absolute flex flex-col z-10 w-full h-full top-0 left-0 items-center justify-start bg-black bg-opacity-80">
      <h2 className="font-Bayon text-6xl p-8 text-white">Choose your font</h2>
      <div
        className={`w-[90%] h-fit p-8 rounded-lg border border-greenGrey bg-fog flex justify-between`}
      >
        <div className="flex w-full justify-between">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">Font Family</div>
            {props.fontList.map((fontName, idx) => {
              return (
                <div
                  key={fontName.name + fontName.variants + idx}
                  className=""
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
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">Variants</div>
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
          <div className="flex-col items-end justify-between inline-flex">
            <div className="flex-col justify-end items-end flex text-right">
              {selectedFont.name !== "choose" ? (
                <>
                  {selectedFont.name !== "none" ? (
                    <link
                      rel="stylesheet"
                      href={`https://fonts.googleapis.com/css2?family=${selectedFont.name}`}
                    />
                  ) : null}

                  <style>
                    {`.disPlayKrFont{
font-family: ${selectedFont.name};
font-weight: ${selectedVar};
}`}
                  </style>
                </>
              ) : null}
              <div className="text-6xl disPlayKrFont">TypoLab</div>
            </div>
            <div className="px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex">
              <div
                className="text-center text-white text-7xl font-['Bayon']"
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
                ok
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanFontList;
