"use client";

import React, { useEffect, useState } from "react";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { HatIco } from "../../../public/svgs";
import { getKoreanFontList } from "@/services/apis/getKoreanFontList";
import { getKoreanFontInfoDB } from "@/services/apis/getKoreanFontInfoDB";
import {
  FontInfoFromDB,
  FontNameNVar,
  FontNameVarSet,
  InferredFont,
  Tag,
} from "@/types/types";
import { fontInfoFromDBDummyData } from "@/containers/pair/fontInfoFromDBDummyData";
import { inferSimillarLatin } from "@/services/apis/inferSimillarLatin";
import KoreanFontList from "@/containers/pair/KoreanFontList";
import LatinRecRes from "@/containers/pair/LatinRecRes";
import { getLatinsFontInfoDB } from "@/services/apis/getLatinFontInfoDB";
import PreviewBox from "@/containers/pair/PreviewBox";
import FontSet from "@/containers/pair/FontSet";
import TagSection from "@/containers/pair/TagSection";
import BoxSection from "@/containers/pair/BoxSection";
import FontInfo from "@/containers/pair/FontInfo";
import UserGuide from "@/containers/pair/UserGuide";

type Props = {};

const Pair = (props: Props) => {
  const subTitleStyle = "mobile:text-4xl mobile:pb-2 font-Bayon text-6xl pb-8";

  const [tagList, setTagList] = useState<{ classTag: Tag[]; useTag: Tag[] }>({
    classTag: [
      { id: 1, name: "Display", selected: false },
      { id: 2, name: "Handwriting", selected: false },
      { id: 3, name: "Monospace", selected: false },
    ],
    useTag: [
      { id: 4, name: "Arrows", selected: false },
      { id: 5, name: "Math Operators", selected: false },
      { id: 6, name: "Misc Symbols", selected: false },
      { id: 7, name: "Kangxi Radicals", selected: false },
    ],
  });

  const [displayFirstSize, setDisplayFirstSize] = useState(
    //  window.innerWidth < 430 ? 12 : 32
    32
  );
  const [displayScndSize, setDisplayScndSize] = useState(
    // window.innerWidth < 430 ? 12 : 32
    32
  );

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

      <div className="mobile:mt-[4rem] mobile:mb-[15rem] mb-[20rem] w-10/12 flex flex-col text-center items-center justify-center mt-[10rem]">
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
        <div className="mobile:mb-20 mobile:gap-10 flex self-start gap-32 mb-40">
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
        <div className="mobile:mb-10 flex flex-col w-full mb-40">
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
            <FontInfo
              selectedFirstInfo={selectedFirstInfo}
              selectedScndInfo={selectedScndInfo}
              subTitleStyle={subTitleStyle}
            />

            {/* user guide section */}
            <UserGuide
              koreanFont={koreanFont}
              latinFont={latinFont}
              selectedFirstInfo={selectedFirstInfo}
              selectedScndInfo={selectedScndInfo}
              subTitleStyle={subTitleStyle}
              tagList={tagList}
            />
          </>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Pair;
