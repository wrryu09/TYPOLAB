"use client";

import React, { useEffect, useState } from "react";
import { HatIco } from "../../../../public/svgs";
import { getFontList, getFontPage } from "@/services/googleFont.apis";
import * as cheerio from "cheerio";
import styles from "./searchRes.module.css";
import { FontInfoType } from "@/types/types";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";

const SearchRes = ({ params }: { params: { fontName: string } }) => {
  const fontFamily = params.fontName.replaceAll("%20", " ");
  const [fontData, setFontData] = useState<FontInfoType>();
  const [fontPageData, setFontPageData] = useState();
  const [varient, setVarient] = useState<string>("regular");
  const fontSizeObj = {
    0: "text-xs",
    1: "text-sm",
    2: "text-base",
    3: "text-lg",
    4: "text-xl",
    5: "text-2xl",
    6: "text-3xl",
    7: "text-4xl",
    8: "text-5xl",
    9: "text-6xl",
    10: "text-7xl",
    11: "text-8xl",
    12: "text-9xl",
  };
  const [fontSize, setFontSize] = useState<string>(fontSizeObj[5]);
  // get info of the font
  useEffect(() => {
    getFontList("trending", fontFamily)
      .then((res) => {
        console.log(res);
        setFontData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //   getFontPage(fontFamily)
    //     .then((res) => {
    //       setFontPageData(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }, []);

  const varientArr: string[] = [];
  if (fontData?.items) {
    fontData.items[0].variants.map((ele) => {
      varientArr.push(ele);
    });
  }
  return (
    <div className="bg-fog h-full text-darkGreen flex flex-col items-center">
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${fontFamily}`}
      />
      <style>
        {`.fontFamily{
    font-family: ${fontFamily};
  }
  .fontWeight{
    font-weight: ${varient}
  }
  }`}
      </style>
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <SizedBox height={5} />
      {/* title */}
      <div className={`w-11/12`}>
        <h1 className={`fontFamily text-[25vw] font-[900]`}>{fontFamily}</h1>
      </div>
      <SizedBox height={9} />

      {varientArr.length > 0 ? (
        <div className="w-11/12">
          <div className="w-full flex justify-between">
            {/* size & weight seek */}
            <h1
              className={`fontWeight rounded-lg border border-lightGrey w-4/5 h-auto flex items-end`}
            >
              <input
                placeholder={fontFamily}
                className={`p-3 ${fontSize} fontFamily w-full h-full`}
              ></input>
            </h1>
            {/* font varient btn */}
            <div className="flex flex-col items-end gap-1 text-greenGrey">
              {varientArr.map((ele) => {
                return (
                  <div
                    key={fontFamily + ele + "varients"}
                    className={`w-fit font-Bayon p-1 pr-2 pl-2 border rounded-lg ${
                      varient == ele
                        ? "border-black bg-lightGrey text-black"
                        : "border-lightGrey"
                    }`}
                    onClick={() => {
                      setVarient(ele);
                    }}
                  >
                    <p>{ele}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* font varient print */}
          {varientArr.map((ele, idx) => {
            return (
              <div key={fontFamily + ele}>
                <style>
                  {`.eleWeight${idx}{
    font-weight: ${ele};
  }
  `}
                </style>
                <p className={`eleWeight${idx} fontFamily text-4xl`}>
                  {fontFamily}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchRes;
