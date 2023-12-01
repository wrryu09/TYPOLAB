"use client";

import React, { useEffect, useRef, useState } from "react";
import { HatIco, LogoHatIco } from "../../../../public/svgs";
import BackArrow from "@/components/BackArrow";
import SizedBox from "@/components/SizedBox";
import { FontSet } from "@/types/types";
import { toPng, toJpeg, toSvg } from "html-to-image";

type Props = {};

const DesignSys = (props: Props) => {
  const designSysRef = useRef<HTMLDivElement>(null);
  const subTitleStyle = "font-Bayon text-6xl pb-8";
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
      <SizedBox height={10} />
      <div className="w-11/12">
        <div className="w-full flex flex-col text-center items-center justify-center">
          <h1 className={subTitleStyle}>DESIGN SYSTEM</h1>
          {/* white box */}
          <div ref={designSysRef} className="w-full h-max">
            <div className="w-full flex flex-col bg-white px-8 py-14 rounded-lg">
              {boxContent.map((font: FontSet, idx) => {
                return (
                  <div
                    key={font.family + font.size + font.weight + "designSys"}
                    className="w-full relative flex text-darkGreen gap-10"
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
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <div className="justify-start items-start gap-3 inline-flex text-sm font-normal">
                        {font.weight} {font.size}pt
                      </div>
                      <div className={`text-4xl ${"fontFamily" + idx}`}>
                        {font.family}
                      </div>
                    </div>
                    <SizedBox height={8} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <SizedBox height={10} />
        {/* export as */}
        <div>
          <h1 className={subTitleStyle}>EXPORT AS...</h1>
          {/* main btn */}
          <div className="flex text-left justify-center w-10/12 mobile:flex-col text-darkGreen font-Bayon">
            {/* PNG */}
            <div
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                handleSave("png");
              }}
            >
              <HatIco width={"100%"} />
              <p className="text-5xl">PNG</p>
            </div>

            {/* JPEG */}
            <div
              className="flex flex-col  hover:text-yellow"
              onClick={() => {
                handleSave("jpg");
              }}
            >
              <HatIco width={"100%"} />
              <p className="text-5xl">JPEG</p>
            </div>

            {/* svg */}
            <div
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                handleSave("svg");
              }}
            >
              <HatIco width={"100%"} />
              <p className="text-5xl">SVG</p>
            </div>
          </div>
          {/* ~main btn */}
        </div>
        <SizedBox height={10} />

        {/* copy css */}
        <div>
          <h1 className={subTitleStyle}>COPY CSS</h1>
          <div>codepen</div>
        </div>

        <SizedBox height={20} />
        <LogoHatIco className="w-full" />
      </div>
    </div>
  );
};

export default DesignSys;
