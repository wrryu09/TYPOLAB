"use client";

import React, { useEffect, useState } from "react";
import { HatIco } from "../../../../public/svgs";
import { getFontList, getFontPage } from "@/services/apis/googleFont.apis";
import { FontInfoType, FontPageType } from "@/types/types";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import PreviewBox from "@/containers/pair/PreviewBox";
import BoxSet from "@/containers/pair/BoxSet";
import License from "./__components/License";
import Designers from "./__components/Designers";
import About from "./__components/About";
import MovingTitle from "./__components/MovingTitle";
import NoData from "./__components/NoData";

const SearchRes = ({ params }: { params: { fontName: string } }) => {
  const fontFamily = params.fontName.replaceAll("%20", " ");
  const [fontData, setFontData] = useState<FontInfoType>();
  const [fontPageData, setFontPageData] = useState<FontPageType>();
  const [varient, setVarient] = useState<string>("regular");
  const [fontSize, setFontSize] = useState<number>(32);
  const [fontInBox, setFontInBox] = useState(false);

  const bringFontData = async () => {
    const res = await getFontList("trending", fontFamily);
    if (res) setFontData(res);
  };
  const bringFontPageData = async () => {
    const res = await getFontPage(fontFamily);
    if (res) setFontPageData(res);
  };

  const varientArr: string[] = [];

  const makeVarientArr = () => {
    if (fontData?.items) {
      fontData.items[0].variants.map((ele) => {
        varientArr.push(ele);
      });
    }
    return varientArr;
  };

  // get info of the font
  useEffect(() => {
    bringFontData();
    bringFontPageData();
  }, []);

  const titleFontStyleSheet = (
    <>
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
    </>
  );
  return (
    <div className="bg-fog h-full text-darkGreen flex flex-col items-center">
      {titleFontStyleSheet}
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <MovingTitle fontFamily={fontFamily} />

      {fontPageData ? (
        // fontPageData 있는 경우에만 표시
        <>
          {makeVarientArr().length > 0 && (
            <div className="w-11/12">
              <div className="mobile:flex-col mobile:items-start w-full flex justify-between">
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
                {/* size & weight seek */}
                <div className="mobile:w-full mobile:mt-[1rem] w-8/12">
                  <PreviewBox
                    boxNum={2}
                    fontFamily={{ name: fontFamily, variants: varient }}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                  />
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
                    <p
                      className={`eleWeight${idx} fontFamily text-2xl text-right`}
                    >
                      The Quick Brown Fox Jumps Over The Lazy Dog
                    </p>
                  </div>
                );
              })}
              <p className={`mobile:mt-[4rem] subTitleStyle mt-[10rem]`}>
                SAVE THIS FONT SET
              </p>
              <div className="flex pt-[1rem]">
                <BoxSet
                  boxNum={2}
                  displaySize={fontSize}
                  font={{ name: fontFamily, variants: varient }}
                  isInBox={fontInBox}
                  setItInBox={setFontInBox}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col mt-40 w-11/12">
            <License license={fontPageData.license} />
            <Designers designers={fontPageData.designers} />
            <About about={fontPageData.description} />
          </div>
        </>
      ) : (
        <NoData />
      )}

      <div className="mobile:mt-[20rem] mobile:mb-[4rem] w-full mt-[30rem] mb-[10rem]">
        <Footer />
      </div>
    </div>
  );
};

export default SearchRes;
