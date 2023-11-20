"use client";

import React, { useState } from "react";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { CheckIco, HatIco, PlusIco } from "../../../public/svgs";
import FontCard from "@/components/FontCard";
import putFontSetToBox from "@/services/putFontSetToBox";
import { getKoreanFontList } from "@/services/getKoreanFontList";
import { getKoreanFontInfoDB } from "@/services/getKoreanFontInfoDB";
import FontDisplayBox from "@/containers/pair/FontDisplayBox";
import { FontInfoFromDB, FontNameNVar } from "@/types/types";
import { convertFontDBDatatoFontInfo } from "@/services/convertFontDBDatatoFontInfo";
import { fontInfoFromDBDummyData } from "@/containers/pair/FontInfoFromDBDummyData";

type Props = {};

const Pair = (props: Props) => {
  const subTitleStyle = "font-Bayon text-6xl pb-8";
  type Tag = {
    id: number;
    name: string;
    selected: boolean;
  };
  const [tagList, setTagList] = useState<Tag[]>([
    { id: 1, name: "#이화여자대학교", selected: true },
    { id: 2, name: "#도전학기제", selected: true },
    { id: 3, name: "#16기", selected: false },
    { id: 4, name: "#타이포랩", selected: true },
    { id: 5, name: "#발표자료에좋은", selected: true },
    { id: 6, name: "#코딩하기좋은", selected: true },
  ]);
  const [displayTitleSize, setDisplayTitleSize] = useState(32);
  const [displayContentSize, setDisplayContentSize] = useState(12);

  function handleTagSelection(tagId: number) {
    const tagArr = [...tagList];
    tagList.forEach((tag) => {
      if (tag.id === tagId) {
        tag.selected = !tag.selected;
      }
    });
    setTagList(tagArr);
  }

  // 국문폰트셋
  const [koreanFont, setKoreanFont] = useState<FontNameNVar>({
    name: "none",
    variants: "none",
  });
  const [showKoreanFontList, setShowKoreanFontList] = useState(false);
  const [koreanFontList, setKoreanFontList] = useState<FontNameNVar[]>([]);
  const [selectedFirstInfo, setSelectedFirstInfo] = useState<FontInfoFromDB>(
    fontInfoFromDBDummyData
  );

  const [latinFont, setLatinFont] = useState<FontNameNVar>({
    name: "none",
    variants: "none",
  });
  const [selectedScndInfo, setSelectedScndInfo] = useState({});

  // Is fontSet in box
  const [firstInBox, setFirstInBox] = useState(false);
  const [scndInBox, setScndInBox] = useState(false);

  // koreanFontList가 없을 때만 서버에 국문폰트명리스트요청
  const saveKoreanFontList = () => {
    if (koreanFontList.length === 0) {
      console.log("get korean font list");
      getKoreanFontList()
        .then((res: FontNameNVar[]) => {
          setKoreanFontList(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

  return (
    <div className="bg-fog h-full text-darkGreen flex flex-col items-center">
      {/* <link
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
      </style> */}
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <SizedBox height={10} />

      <div className="w-10/12 flex flex-col text-center items-center justify-center">
        {/* tag section */}
        <h1 className={subTitleStyle}>TAG</h1>
        <div className="flex flex-wrap gap-2 mb-40">
          {tagList.map((tag) => {
            return (
              <h1
                key={tag.id + tag.name}
                className={`px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center hover:bg-red ${
                  tag.selected ? "bg-red font-semibold" : "bg-fog"
                }`}
                onClick={() => {
                  handleTagSelection(tag.id);
                }}
              >
                {tag.name}
              </h1>
            );
          })}
        </div>

        {/* font section */}
        <div className="flex self-start gap-32 mb-16">
          {/* 국문 선택 폰트 모달 */}
          {showKoreanFontList ? (
            <div className="border-greenGrey">
              <p>폰트 선택</p>
              {koreanFontList.map((fontName, idx) => {
                return (
                  <div
                    key={fontName.name + fontName.variants + idx}
                    onClick={() => {
                      setKoreanFont(fontName);
                      // 해당하는 폰트 정보 불러오기
                      putKoreanFontData(fontName.name);
                      // 폰트 선택 리스트 닫기
                      setShowKoreanFontList(false);
                    }}
                  >
                    <link
                      rel="stylesheet"
                      href={`https://fonts.googleapis.com/css2?family=${fontName.name}`}
                    />
                    <style>
                      {`.fontFamilykoreanFontListCss${idx}{
    font-family: ${fontName.name};
  }
  .fontWeight{
    font-weight: ${fontName.variants};
  }
  }`}
                    </style>
                    <p className={`fontFamilykoreanFontListCss${idx}`}>
                      {fontName.name} {fontName.variants}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}

          {/* 1st set */}
          <div
            onClick={() => {
              setShowKoreanFontList(!showKoreanFontList);
              saveKoreanFontList();
            }}
          >
            {koreanFont.name === "none" ? (
              <div className="flex flex-col items-start">
                <h1 className="text-4xl">국문 폰트 선택</h1>
                <p>선택 가능 폰트 보기</p>
              </div>
            ) : (
              <div className="flex flex-col items-start">
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=${koreanFont.name}`}
                />
                <style>
                  {`.fontFamilykoreanFontFam{
    font-family: ${koreanFont.name};
  }
  .fontWeight{
    font-weight: ${koreanFont.variants};
  }
  }`}
                </style>
                <h1 className="text-4xl fontFamilykoreanFontFam">
                  {koreanFont.name} {koreanFont.variants}
                </h1>
                <div className="flex gap-2">
                  {selectedFirstInfo.classifications.map((classifi) => {
                    return (
                      <p key={selectedFirstInfo.family + classifi}>
                        {classifi}
                      </p>
                    );
                  })}
                  <p>{selectedFirstInfo.category}</p>
                </div>
              </div>
            )}
          </div>

          {/* 2nd set */}
          <div>
            {latinFont.name === "none" ? (
              <div className="flex flex-col items-start">
                <h1 className="text-4xl">추천 영문 폰트</h1>
                <p>국문 폰트를 선택하세요</p>
              </div>
            ) : (
              <div className="flex flex-col items-start">
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=${koreanFont.name}`}
                />
                <style>
                  {`.fontFamilykoreanFontFam{
    font-family: ${koreanFont.name};
  }
  .fontWeight{
    font-weight: ${koreanFont.variants};
  }
  }`}
                </style>
                <h1 className="text-4xl fontFamilykoreanFontFam">
                  {koreanFont.name} {koreanFont.variants}
                </h1>
                <div className="flex gap-2">
                  {selectedFirstInfo.classifications.map((classifi) => {
                    return (
                      <p key={selectedFirstInfo.family + classifi}>
                        {classifi}
                      </p>
                    );
                  })}
                  <p>{selectedFirstInfo.category}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* font display box */}
        <FontDisplayBox
          displayContentSize={displayContentSize}
          displayTitleSize={displayTitleSize}
          setDisplayContentSize={setDisplayContentSize}
          setDisplayTitleSize={setDisplayTitleSize}
        />

        {/* box section */}
        <div className="w-full mb-60">
          <h1 className={subTitleStyle}>ADD TO YOUR BOX</h1>
          <div className="flex flex-col items-center gap-y-6">
            {/* 1st set */}
            <div className="flex w-5/12 justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl">Noto Sans</h1>
                <p>San-Serif, {displayTitleSize}</p>
              </div>
              {firstInBox ? (
                <CheckIco className={"fill-red w-8"} />
              ) : (
                <PlusIco
                  className="w-8"
                  onClick={() => {
                    putFontSetToBox(
                      {
                        family: "Noto Sans",
                        weight: "bold",
                        size: 32,
                      },
                      setFirstInBox
                    );
                  }}
                />
              )}
            </div>
            {/* 2nd set */}
            <div className="flex w-5/12 justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl">Noto Sans</h1>
                <p>San-Serif, {displayContentSize}</p>
              </div>
              {scndInBox ? (
                <CheckIco className={"fill-red w-8"} />
              ) : (
                <PlusIco
                  className="w-8"
                  onClick={() => {
                    putFontSetToBox(
                      {
                        family: "Noto Sans",
                        weight: "bold",
                        size: 12,
                      },
                      setScndInBox
                    );
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* font info section */}
        <div className="mb-96">
          <h1 className={subTitleStyle}>FONT INFO</h1>
          {/* first FontCard */}
          {selectedFirstInfo.family !== "none" ? (
            <FontCard
              idx={0}
              data={convertFontDBDatatoFontInfo(selectedFirstInfo)}
            />
          ) : null}
          {/* <FontCard idx={1}/> */}
          <HatIco className="absolute w-full left-0 right-0" />
        </div>

        {/* user guide section */}
        <div className="mb-40">
          <h1 className={subTitleStyle}>HOW TO USE</h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {/* 해당되는 태그만 보이기 */}
            {tagList.map((tag) => {
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
          <p>
            happy happyhappy happyhappy happyhappy happyhappy happyhappy
            happyhappy happy
          </p>
        </div>
      </div>
      <SizedBox height={20} />
      <Footer />
    </div>
  );
};

export default Pair;
