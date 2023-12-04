import { FontSet } from "@/types/types";
import React from "react";

type Props = {
  subTitleStyle: string;
  designSysRef: React.RefObject<HTMLDivElement>;
  boxContent: FontSet[];
};

const DesignSysBox = (props: Props) => {
  return (
    <div className="w-full flex flex-col text-center items-center justify-center mb-[10rem]">
      <h1 className={props.subTitleStyle}>DESIGN SYSTEM</h1>
      {/* white box */}
      <div ref={props.designSysRef} className="w-full h-max">
        <div className="mobile:px-4 mobile:py-8 w-full flex flex-col bg-white px-8 py-14 rounded-lg">
          {props.boxContent.map((font: FontSet, idx) => {
            return (
              <div
                key={font.family + font.size + font.weight + "designSys"}
                className="mobile:gap-6 w-full relative flex text-darkGreen gap-10"
              >
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=${font.family}`}
                  crossOrigin="anonymous"
                />
                <style>
                  {`.fontFamily${idx}{
font-family: ${font.family};
font-weight: ${font.weight};
}`}
                </style>
                {/* alias */}
                <div className="w-1/4 text-right text-sm font-normal font-['Noto Sans']">
                  {font.alias ? font.alias : "-"}
                </div>

                {/* fonts */}
                <div className="text-left w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-start gap-3 inline-flex text-sm font-normal pb-10">
                    {font.weight} {font.size}pt
                  </div>
                  <div
                    className={`mobile:text-3xl text-4xl ${"fontFamily" + idx}`}
                  >
                    {font.family}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesignSysBox;
