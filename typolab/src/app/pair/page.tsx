"use client";

import React, { useEffect, useState } from "react";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { HatIco } from "../../../public/svgs";
import FontCard from "@/components/FontCard";
import { getKoreanFontList } from "@/services/apis/getKoreanFontList";
import { getKoreanFontInfoDB } from "@/services/apis/getKoreanFontInfoDB";
import {
  FontInfoFromDB,
  FontNameNVar,
  FontNameVarSet,
  InferredFont,
  Tag,
} from "@/types/types";
import { convertFontDBDatatoFontInfo } from "@/services/convertFontDBDatatoFontInfo";
import { fontInfoFromDBDummyData } from "@/containers/pair/fontInfoFromDBDummyData";
import { inferSimillarLatin } from "@/services/apis/inferSimillarLatin";
import KoreanFontList from "@/containers/pair/KoreanFontList";
import LatinRecRes from "@/containers/pair/LatinRecRes";
import { getLatinsFontInfoDB } from "@/services/apis/getLatinFontInfoDB";
import PreviewBox from "@/containers/pair/PreviewBox";
import FontSet from "@/containers/pair/FontSet";
import TagSection from "@/containers/pair/TagSection";
import BoxSection from "@/containers/pair/BoxSection";

type Props = {};

const Pair = (props: Props) => {
  const subTitleStyle = "font-Bayon text-6xl pb-8";

  const [tagList, setTagList] = useState<{ classTag: Tag[]; useTag: Tag[] }>({
    classTag: [
      { id: 1, name: "Display", selected: false },
      { id: 2, name: "Handwriting", selected: false },
      { id: 3, name: "Monospace", selected: false },
    ],
    useTag: [
      { id: 4, name: "Arrows", selected: false },
      { id: 5, name: "Spacing Modifier", selected: false },
      { id: 6, name: "Math Operators", selected: false },
      { id: 7, name: "Misc Symbols", selected: false },
      { id: 8, name: "Kangxi Radicals", selected: false },
    ],
  });

  const [displayFirstSize, setDisplayFirstSize] = useState(32);
  const [displayScndSize, setDisplayScndSize] = useState(32);

  function handleTagSelection(tagId: number) {
    const tagArr = { ...tagList };
    tagArr.classTag.forEach((tag) => {
      if (tag.id === tagId) {
        tag.selected = !tag.selected;
      } else if (tagId < 4) {
        tag.selected = false;
      }
    });
    tagArr.useTag.forEach((tag) => {
      if (tag.id === tagId) {
        tag.selected = !tag.selected;
      }
    });
    setTagList(tagArr);
  }

  // 국문폰트셋
  const [koreanFont, setKoreanFont] = useState<FontNameVarSet>({
    name: "none",
    variants: "none",
  });

  // show modal options
  // select korean font
  const [showKoreanFontList, setShowKoreanFontList] = useState(false);
  // select latin font above recommendation
  const [showLatinRecModal, setShowLatinRecModal] = useState(false);

  // view guide section
  const [showGuide, setShowGuide] = useState(false);

  // all korean fonts list from db
  const [koreanFontList, setKoreanFontList] = useState<FontNameNVar[]>([]);

  // metadata for selected korean font
  const [selectedFirstInfo, setSelectedFirstInfo] = useState<FontInfoFromDB>(
    fontInfoFromDBDummyData
  );

  // list of inferred lation font
  const [inferredLatinFont, setInferredLationFont] = useState<InferredFont[]>([
    {
      fontName: "none",
      fontVar: "none",
      fontScore: 0,
    },
  ]);

  // inferred된 latinFont 중에서 선택한 폰트
  const [latinFont, setLatinFont] = useState<FontNameVarSet>({
    name: "none",
    variants: "none",
  });

  // koreanFont 있으면 비슷한 latinFont 추천 결과 받아오기
  useEffect(() => {
    console.log("infer simillar latin");
    if (koreanFont.name !== "none") {
      inferSimillarLatin(koreanFont)
        .then((res) => {
          console.log(res);
          setInferredLationFont(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no koreanFont data");
    }
  }, [koreanFont]);

  // 영문폰트 상세정보
  const [selectedScndInfo, setSelectedScndInfo] = useState<FontInfoFromDB>(
    fontInfoFromDBDummyData
  );

  // Is fontSet in box
  const [firstInBox, setFirstInBox] = useState(false);
  const [scndInBox, setScndInBox] = useState(false);

  // koreanFontList가 없을 때만 서버에 국문폰트명리스트요청
  const saveKoreanFontList = () => {
    // if (koreanFontList.length === 0) {
    console.log("get korean font list");
    getKoreanFontList(tagList)
      .then((res: FontNameNVar[]) => {
        setKoreanFontList(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };

  const putKoreanFontData = (fontName: string) => {
    console.log("putKoreanFontData");
    getKoreanFontInfoDB(fontName)
      .then((res) => {
        setSelectedFirstInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const putLatinFontData = (fontName: string) => {
    console.log("putLatinFontData");
    getLatinsFontInfoDB(fontName)
      .then((res) => {
        setSelectedScndInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-fog h-full text-darkGreen flex flex-col items-center">
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=Inter`}
      />
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <SizedBox height={10} />

      <div className="w-10/12 flex flex-col text-center items-center justify-center">
        {/* 다시 선택하기 버튼 */}
        {koreanFont.name !== "none" ? (
          <div
            className="hover:bg-red hover:border-darkGreen self-start text-darkGreen border-2 bg-lightGrey border-greenGrey font-semibold text-xl px-4 py-2 mb-10 rounded-full"
            onClick={() => {
              setKoreanFont({ name: "none", variants: "none" });
              setLatinFont({ name: "none", variants: "none" });
              setSelectedFirstInfo(fontInfoFromDBDummyData);
              setSelectedScndInfo(fontInfoFromDBDummyData);
            }}
          >
            다시 선택하기
          </div>
        ) : (
          <>
            {/* tag section */}
            <TagSection
              handleTagSelection={handleTagSelection}
              subTitleStyle={subTitleStyle}
              tagList={tagList}
            />
          </>
        )}

        {/* font section */}
        <div className="flex self-start gap-32 mb-40">
          {/* 국문 선택 폰트 모달 */}
          {showKoreanFontList ? (
            <KoreanFontList
              fontList={koreanFontList}
              putFontData={putKoreanFontData}
              setFont={setKoreanFont}
              setShowFontList={setShowKoreanFontList}
            />
          ) : null}

          {/* 영문 선택 폰트 모달 */}
          {showLatinRecModal ? (
            <LatinRecRes
              setShowLatinRecModal={setShowLatinRecModal}
              inferredLatinFont={inferredLatinFont}
              koreanFont={koreanFont}
              setLatinFont={setLatinFont}
              putFontData={putLatinFontData}
            />
          ) : null}
          {koreanFont.name !== "none" ? (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${koreanFont.name}`}
            />
          ) : null}
          {latinFont.name !== "none" ? (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${latinFont.name}`}
            />
          ) : null}
          <style>
            {`.fontFamily1FontFam{
    font-family: ${koreanFont.name};
    font-weight: ${koreanFont.variants};
  }
  .fontFamily2FontFam{
    font-family: ${latinFont.name};
    font-weight: ${latinFont.variants};
  }
  `}
          </style>
          {/* 1st set */}
          <FontSet
            setShowFontList={setShowKoreanFontList}
            showFontList={showKoreanFontList}
            saveFontList={saveKoreanFontList}
            Font={koreanFont}
            selectedInfo={selectedFirstInfo}
            fontSetNum={1}
          />

          {koreanFont.name !== "none" ? (
            <div>
              {/* 2nd set */}
              {inferredLatinFont[0].fontName === "none" ? (
                <div className="flex flex-col items-start">
                  <h1 className="text-4xl">추천 영문 폰트</h1>
                  <p>국문 폰트를 선택하세요</p>
                </div>
              ) : (
                <FontSet
                  Font={latinFont}
                  selectedInfo={selectedScndInfo}
                  setShowFontList={setShowLatinRecModal}
                  showFontList={showLatinRecModal}
                  fontSetNum={2}
                />
              )}
            </div>
          ) : null}
        </div>

        {/* font display box */}
        <div className="flex flex-col w-full mb-40">
          {koreanFont.name !== "none" ? (
            <PreviewBox
              fontSize={displayFirstSize}
              setFontSize={setDisplayFirstSize}
              fontFamily={koreanFont}
              boxNum={1}
            />
          ) : null}
          {latinFont.name !== "none" ? (
            <PreviewBox
              fontSize={displayScndSize}
              setFontSize={setDisplayScndSize}
              fontFamily={latinFont}
              boxNum={2}
            />
          ) : null}
        </div>

        {koreanFont.name !== "none" || latinFont.name !== "none" ? (
          <>
            {/* box section */}
            <BoxSection
              displayFirstSize={displayFirstSize}
              displayScndSize={displayScndSize}
              firstInBox={firstInBox}
              koreanFont={koreanFont}
              latinFont={latinFont}
              scndInBox={scndInBox}
              setFirstInBox={setFirstInBox}
              setScndInBox={setScndInBox}
              subTitleStyle={subTitleStyle}
            />

            {/* font info section */}
            <div className="mb-96">
              <h1 className={`${subTitleStyle} mb-40`}>FONT INFO</h1>
              {/* FONT CARDS */}
              <div className="relative w-screen flex">
                <div className="flex flex-wrap gap-4 z-10 absolute left-1/2 -translate-x-1/2 -top-32">
                  {/* first FontCard */}
                  {selectedFirstInfo.family !== "none" ? (
                    <FontCard
                      idx={0}
                      data={convertFontDBDatatoFontInfo(selectedFirstInfo)}
                    />
                  ) : null}
                  {selectedScndInfo.family !== "none" ? (
                    <FontCard
                      idx={1}
                      data={convertFontDBDatatoFontInfo(selectedScndInfo)}
                    />
                  ) : null}
                </div>
                <HatIco className="left-0 right-0 absolute" />
              </div>
            </div>

            {/* user guide section */}
            <div className="mt-40 mb-40">
              {/* view guide */}
              {koreanFont.name !== "none" && latinFont.name !== "none" ? (
                <div>
                  {!showGuide ? (
                    <div
                      className="mb-40 px-12 py-4 bg-darkGreen hover:bg-red rounded-full justify-center items-center inline-flex"
                      onClick={() => {
                        setShowGuide(true);
                      }}
                    >
                      <p className="text-center text-white text-7xl font-['Bayon']">
                        view guide
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h1 className={subTitleStyle}>HOW TO USE</h1>
                      <div className="flex flex-wrap gap-2 mb-10">
                        {/* 해당되는 태그만 보이기 */}
                        {tagList.classTag.map((tag) => {
                          return (
                            <div key={tag.id + tag.name + "selected"}>
                              {tag.selected === true ? (
                                <h1
                                  className={`px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
                  bg-fog
                `}
                                >
                                  {tag.name}
                                </h1>
                              ) : null}
                            </div>
                          );
                        })}
                        {tagList.useTag.map((tag) => {
                          return (
                            <div key={tag.id + tag.name + "selected"}>
                              {tag.selected === true ? (
                                <h1
                                  className={`px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
                  bg-fog
                `}
                                >
                                  {tag.name}
                                </h1>
                              ) : null}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
      <SizedBox height={20} />
      <Footer />
    </div>
  );
};

export default Pair;
