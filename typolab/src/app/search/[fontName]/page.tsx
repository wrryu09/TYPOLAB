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
  // get info of the font
  //   useEffect(() => {
  //     getFontList("trending", fontFamily)
  //       .then((res) => {
  //         console.log(res);
  //         setFontData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     getFontPage(fontFamily)
  //       .then((res) => {
  //         setFontPageData(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);

  return (
    <div className="bg-fog h-full">
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${fontFamily}`}
      />
      <style>
        {`  .fontFamily{
    font-family: ${fontFamily};
    font-weight: 900;
  }
  }`}
      </style>
      <BackIco />
      <HatIco width={"25%"} className="rotate-180 self-center" />
      <h1 className={`fontFamily text-9xl`}>{fontFamily}</h1>
    </div>
  );
};

export default SearchRes;
