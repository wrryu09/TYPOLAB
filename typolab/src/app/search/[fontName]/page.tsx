"use client";

import React, { useEffect, useState } from "react";
import { HatIco } from "../../../../public/svgs";
import { getFontList, getFontPage } from "@/services/apis/googleFont.apis";
import { FontInfoType, FontPageType } from "@/types/types";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import PreviewBox from "@/containers/pair/PreviewBox";
import BoxSet from "@/containers/pair/BoxSet";

const SearchRes = ({ params }: { params: { fontName: string } }) => {
  const fontFamily = params.fontName.replaceAll("%20", " ");
  const [fontData, setFontData] = useState<FontInfoType>();
  const [fontPageData, setFontPageData] = useState<FontPageType>();
  const [varient, setVarient] = useState<string>("regular");
  const [fontSize, setFontSize] = useState<number>(32);
  const subTitleStyle = "mobile:text-4xl mobile:pb-4 font-Bayon text-6xl pb-8";
  const [fontInBox, setFontInBox] = useState(false);

  // get info of the font
  useEffect(() => {
    getFontList("trending", fontFamily)
      .then((res) => {
        setFontData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getFontPage(fontFamily)
      .then((res) => {
        setFontPageData(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <h1
          className={`fontFamily w-full text-[20vw] ${
            fontFamily.length > 8 ? styles.headLineTxt : null
          }  whitespace-nowrap font-[900]`}
        >
          {fontFamily}
        </h1>
      </div>
      <SizedBox height={9} />

      {fontPageData?.family !== undefined ? (
        // fontPageData 있는 경우에만 표시
        <>
          {varientArr.length > 0 ? (
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
              <p className={`mobile:mt-[4rem] ${subTitleStyle} mt-[10rem]`}>
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
          ) : null}
          <div className="flex flex-col mt-40 w-11/12">
            {/* license */}
            <div className="self-end mb-20">
              <h1 className={subTitleStyle}>LICENSE</h1>
              {fontPageData ? <>{fontPageData.license}</> : null}
            </div>

            {/* designers */}
            <div className="self-start mb-20">
              <h1 className={subTitleStyle}>DESIGNERS</h1>
              {fontPageData?.designers ? (
                <>
                  {fontPageData.designers.map((data) => {
                    return (
                      <div key={data.name}>
                        {data.imageUrl === null ? null : (
                          <img
                            alt="designer image"
                            src={data.imageUrl}
                            className="w-1/12 pb-4"
                          />
                        )}
                        <p
                          dangerouslySetInnerHTML={{ __html: data.name }}
                          className="w-5/12 pb-2"
                        ></p>
                        {data.bio === null ? null : (
                          <p
                            dangerouslySetInnerHTML={{ __html: data.bio }}
                            className="w-5/12 pb-12"
                          ></p>
                        )}
                      </div>
                    );
                  })}
                </>
              ) : null}
            </div>

            {/* about */}
            <div className="self-center text-center w-10/12">
              <h1 className={subTitleStyle}>ABOUT</h1>
              {fontPageData ? (
                <p
                  dangerouslySetInnerHTML={{ __html: fontPageData.description }}
                ></p>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div className="h-9 bg-red">
          <h1 className={subTitleStyle}>OOPS! NO DATA</h1>
        </div>
      )}

      <div className="mobile:mt-[20rem] mobile:mb-[4rem] w-full mt-[30rem] mb-[10rem]">
        <Footer />
      </div>
    </div>
  );
};

export default SearchRes;
