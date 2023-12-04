"use client";

import React, { useEffect, useRef, useState } from "react";
import { HatIco, LogoHatIco } from "../../../../public/svgs";
import BackArrow from "@/components/BackArrow";
import { FontSet } from "@/types/types";
import { toPng, toJpeg, toSvg } from "html-to-image";

const DesignSys = () => {
  const designSysRef = useRef<HTMLDivElement>(null);
  const subTitleStyle = "mobile:text-4xl mobile:pb-4 font-Bayon text-6xl pb-8";
  const [boxContent, setBoxContent] = useState<FontSet[]>([]);
  useEffect(() => {
    const boxItems = localStorage.getItem("box");
    if (boxItems) {
      const boxItemsObj = JSON.parse(boxItems);
      setBoxContent(boxItemsObj);
    }
  }, []);

  const handleSave = (saveType: "png" | "jpg" | "svg") => {
    if (designSysRef.current === null) {
      return;
    }
    if (saveType === "png") {
      toPng(designSysRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "typolab-designsystem.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (saveType === "jpg") {
      toJpeg(designSysRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "typolab-designsystem.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toSvg(designSysRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "typolab-designsystem.svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-blueblue h-full text-darkGreen flex flex-col items-center">
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <div className="mobile:mt-[6rem] w-10/12 mt-[10rem]">
        <div className="w-full flex flex-col text-center items-center justify-center mb-[10rem]">
          <h1 className={subTitleStyle}>DESIGN SYSTEM</h1>
          {/* white box */}
          <div ref={designSysRef} className="w-full h-max">
            <div className="mobile:px-4 mobile:py-8 w-full flex flex-col bg-white px-8 py-14 rounded-lg">
              {boxContent.map((font: FontSet, idx) => {
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
                        className={`mobile:text-3xl text-4xl ${
                          "fontFamily" + idx
                        }`}
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

        {/* export as */}
        <div className="mobile:mb-[6rem] mb-[10rem]">
          <h1 className={subTitleStyle}>EXPORT AS...</h1>
          {/* main btn */}
          <div className="mobile:w-full flex text-left justify-center w-10/12 text-darkGreen font-Bayon">
            {/* PNG */}
            <div
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                handleSave("png");
              }}
            >
              <HatIco width={"100%"} />
              <p className="mobile:text-3xl text-5xl">PNG</p>
            </div>

            {/* JPEG */}
            <div
              className="flex flex-col  hover:text-yellow"
              onClick={() => {
                handleSave("jpg");
              }}
            >
              <HatIco width={"100%"} />
              <p className="mobile:text-3xl text-5xl">JPEG</p>
            </div>

            {/* svg */}
            <div
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                handleSave("svg");
              }}
            >
              <HatIco width={"100%"} />
              <p className="mobile:text-3xl text-5xl">SVG</p>
            </div>
          </div>
          {/* ~main btn */}
        </div>

        {/* copy css */}
        <div className="mb-[10rem]">
          <h1 className={`${subTitleStyle}`}>COPY CSS</h1>
          <h1
            className={`font-Bayon text-lg pb-2`}
          >{`To embed a font, copy the code into the <head> of your html`}</h1>
          {/* codeBox */}
          <div className="mobile:w-full mobile:p-4 mobile:text-xs w-10/12 bg-white p-8 mb-4 flex text-sm">
            <div>
              <p>{`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`}</p>
              <p>
                {`<link href="https://fonts.googleapis.com/css2?${boxContent.map(
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
          <div className="mobile:w-full mobile:p-4 mobile:text-xs w-10/12 bg-white p-8 mb-4 text-sm">
            <p>
              {boxContent.map((font) => {
                return `font-family: ${font.family};\n font-size: ${font.size}\n`;
              })}
            </p>
          </div>
        </div>

        <LogoHatIco className="w-full" />
      </div>
    </div>
  );
};

export default DesignSys;
