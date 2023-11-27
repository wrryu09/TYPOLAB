import { FontNameVarSet } from "@/types/types";
import React, { SetStateAction, useState } from "react";

type Props = {
  setShowLatinRecModal: React.Dispatch<SetStateAction<boolean>>;
  inferredLatinFont: FontNameVarSet[];
  koreanFont: FontNameVarSet;
  setLatinFont: React.Dispatch<SetStateAction<FontNameVarSet>>;
};

const LatinRecRes = (props: Props) => {
  const [selectedFont, setSelectedFont] = useState<FontNameVarSet>({
    name: "choose",
    variants: "none",
  });

  return (
    <div className="absolute flex flex-col z-10 w-full h-full top-0 left-0 items-center justify-center bg-black bg-opacity-80">
      <h2 className="font-Bayon text-6xl pb-8 text-red">Result</h2>
      <div className="w-[90%] p-8 rounded-lg border border-greenGrey bg-fog flex justify-between text-darkGreen">
        <div className="flex w-full justify-between">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">No.</div>
            <div className="">1</div>
            <div className="">2</div>
            <div className="">3</div>
            <div className="">4</div>
            <div className="">5</div>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">Font Family</div>
            {props.inferredLatinFont.map((ele) => {
              return (
                <div
                  key={ele.name + ele.variants + "inferredLatin"}
                  className={`${
                    selectedFont.name === ele.name &&
                    selectedFont.variants === ele.variants
                      ? "text-red"
                      : "text-darkGreen"
                  }`}
                  onClick={() => {
                    setSelectedFont({
                      name: ele.name,
                      variants: ele.variants,
                    });
                  }}
                >
                  {ele.name} {ele.variants}
                </div>
              );
            })}
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">Variants</div>
            <div className="">regular</div>
            <div className="">bold</div>
            <div className="">semibold</div>
            <div className="">extrabold</div>
            <div className="">black</div>
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
              <div className="text-6xl latinFontCss">Black Ops One</div>
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
