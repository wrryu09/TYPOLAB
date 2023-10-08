"use client";

import React, { useEffect, useState } from "react";
import { BackIco, HatIco } from "../../../../public/svgs";
import { getFontList, getFontPage } from "@/services/googleFont.apis";
import * as cheerio from "cheerio";
import styles from "./searchRes.module.css";
import { FontInfoType } from "@/types/types";

const SearchRes = ({ params }: { params: { fontName: string } }) => {
  const fontFamily = params.fontName.replaceAll("%20", " ");
  const [fontData, setFontData] = useState<FontInfoType>();
  const [fontPageData, setFontPageData] = useState();
  const [varient, setVarient] = useState<string>("regular");
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

  const varientClass = `font-[${varient}]`;
  const varientArr: string[] = [];
  if (fontData?.items) {
    fontData.items[0].variants.map((ele) => {
      varientArr.push(ele);
    });
  }
  return (
    <div className="bg-fog h-full">
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${fontFamily}`}
      />
      <style>
        {`.fontFamily{
    font-family: ${fontFamily};
  }
  }`}
      </style>
      <BackIco />
      <HatIco width={"25%"} className="rotate-180 self-center" />
      <h1 className={`fontFamily text-9xl font-[900]`}>{fontFamily}</h1>
      <h1 className={varientClass}>{fontFamily}</h1>
      {varientArr.length > 0 ? (
        <div>
          {/* font varients */}
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
          {varientArr.map((ele) => {
            const varientStyle = `font-[${ele}]`;
            return (
              <div key={fontFamily + ele}>
                <p className={varientStyle}>{fontFamily}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchRes;
