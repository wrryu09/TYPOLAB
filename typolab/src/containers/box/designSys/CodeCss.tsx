import { FontSet } from "@/types/types";
import React from "react";

type Props = {
  subTitleStyle: string;
  boxContent: FontSet[];
};

const CodeCss = (props: Props) => {
  const codeBoxCss =
    "mobile:w-full mobile:p-4 mobile:text-xs w-10/12 bg-white p-8 mb-4 flex text-sm rounded-lg";
  return (
    <div className="mb-[10rem]">
      <h1 className={`${props.subTitleStyle}`}>COPY CSS</h1>
      <h1
        className={`font-Bayon text-lg pb-2`}
      >{`To embed a font, copy the code into the <head> of your html`}</h1>
      {/* codeBox */}
      <div className={codeBoxCss}>
        <div>
          <p>{`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`}</p>
          <p>
            {`<link href="https://fonts.googleapis.com/css2?${props.boxContent.map(
              (font) => {
                return `family=${font.family.replace(" ", "+")}:wght@${
                  font.weight === "regular" ? 400 : font.weight
                }&`;
              }
            )}
    "rel="stylesheet"></link>`.replaceAll(",", "")}
          </p>
        </div>
      </div>
      {/* css rules */}
      <h1
        className={`font-Bayon text-lg pb-2`}
      >{`CSS rules to specify families`}</h1>
      <div className={codeBoxCss}>
        <p>
          {props.boxContent.map((font) => {
            return `font-family: ${font.family};\n font-size: ${font.size}\n`;
          })}
        </p>
      </div>
    </div>
  );
};

export default CodeCss;
