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
import PairedInfo from "@/containers/pair/PairedInfo";
import KoreanModalBtn from "@/containers/pair/KoreanModalBtn";
import ReselectBtn from "@/containers/pair/ReselectBtn";

const Pair = () => {
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

  const [selectedFont, setSelectedFont] = useState<FontNameNVar>({
    name: "none",
    variants: ["regular"],
  });
  const handleSelectFont = ({ name, variants }: FontNameNVar) => {
    setSelectedFont({
      name,
      variants,
    });
  };
  const [selectedVar, setSelectedVar] = useState<string>("regular");

  const handleTagSelection = (tagId: number) => {
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
  };

  // 국문폰트셋
  const [koreanFont, setKoreanFont] = useState<FontNameVarSet>({
    name: "none",
    variants: "none",
  });

  // show modal options
  // select korean font
  const [showKoreanFontList, setShowKoreanFontList] = useState(false);
  const handleShowkoreanList = () => {
    setShowKoreanFontList(!handleShowkoreanList);
  };
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
  const getSimilarLatin = async () => {
    if (koreanFont.name !== "none") {
      const res = await inferSimillarLatin(koreanFont);
      if (res) {
        setInferredLationFont(res);
      }
    } else {
      console.log("no koreanFont data");
    }
  };

  // TODO: 버튼 누르면 infer 하도록 수정
  useEffect(() => {
    console.log("infer simillar latin");
    getSimilarLatin();
  }, [koreanFont]);

  // 영문폰트 상세정보
  const [selectedScndInfo, setSelectedScndInfo] = useState<FontInfoFromDB>(
    fontInfoFromDBDummyData
  );

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

  const putKoreanFontData = async (fontName: string) => {
    console.log("putKoreanFontData");
    const res = await getKoreanFontInfoDB(fontName);
    if (res) {
      setSelectedFirstInfo(res.data);
    }
  };

  const putLatinFontData = async (fontName: string) => {
    console.log("putLatinFontData");
    const res = await getLatinsFontInfoDB(fontName);
    if (res) {
      setSelectedScndInfo(res.data);
    }
  };
  const resetFonts = () => {
    setKoreanFont({ name: "none", variants: "none" });
    setLatinFont({ name: "none", variants: "none" });
    setSelectedFirstInfo(fontInfoFromDBDummyData);
    setSelectedScndInfo(fontInfoFromDBDummyData);
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
          <ReselectBtn resetFonts={resetFonts} />
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
        <div className="mobile:gap-10 flex self-start gap-32 mb-10">
          {/* 국문 선택 폰트 모달 */}
          {showKoreanFontList ? (
            <>
              <KoreanFontList
                fontList={koreanFontList}
                setShowFontList={handleShowkoreanList}
                selectedFont={selectedFont}
                selectedVar={selectedVar}
                handleSelectFont={handleSelectFont}
                setSelectedVar={setSelectedVar}
              />
              {/* OK Btn */}
              <KoreanModalBtn
                putFontData={putKoreanFontData}
                selectedFont={selectedFont}
                selectedVar={selectedVar}
                setFont={setKoreanFont}
                setShowFontList={setShowKoreanFontList}
              />
            </>
          ) : null}

          {/* 영문 선택 폰트 모달 */}
          {showLatinRecModal && (
            <LatinRecRes
              setShowLatinRecModal={setShowLatinRecModal}
              inferredLatinFont={inferredLatinFont}
              koreanFont={koreanFont}
              setLatinFont={setLatinFont}
              putFontData={putLatinFontData}
            />
          )}
          {koreanFont.name !== "none" && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${koreanFont.name}`}
            />
          )}
          {latinFont.name !== "none" && (
            <link
              rel="stylesheet"
              href={`https://fonts.googleapis.com/css2?family=${latinFont.name}`}
            />
          )}
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
        {/* 국문만 선택되어 있을 경우 추천 영문 폰트 확인 안내문구 */}
        <div className="mb-20">
          {koreanFont.name !== "none" && latinFont.name == "none" ? (
            <p className="break-keep text-sm">
              추천 영문 폰트 버튼을 눌러 선택한 국문 폰트와 유사한 영문 폰트를
              확인해보세요!
            </p>
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
          <PairedInfo
            displayFirstSize={displayFirstSize}
            displayScndSize={displayScndSize}
            koreanFont={koreanFont}
            latinFont={latinFont}
            selectedFirstInfo={selectedFirstInfo}
            selectedScndInfo={selectedScndInfo}
            subTitleStyle={subTitleStyle}
            tagList={tagList}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Pair;
