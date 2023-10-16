"use client";

import React, { useState } from "react";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { HatIco, PlusIco } from "../../../public/svgs";
import FontCard from "@/components/FontCard";
import FontSetting from "@/containers/search/FontSetting";
import { putFontSetToBox } from "@/services/putFontSetToBox";

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

  const [showTitleSetting, setShowTitleSetting] = useState(false);
  const [showContentSetting, setShowContentSetting] = useState(false);

  function handleTagSelection(tagId: number) {
    const tagArr = [...tagList];
    tagList.forEach((tag) => {
      if (tag.id === tagId) {
        tag.selected = !tag.selected;
      }
    });
    setTagList(tagArr);
  }

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
          {/* 1st set */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl">Black Ops One</h1>
            <p>San-Serif, display</p>
          </div>
          {/* 2nd set */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl">Noto Sans</h1>
            <p>San-Serif, display</p>
          </div>
        </div>

        {/* font display box */}
        <div className="w-full flex flex-col items-start gap-y-2 border border-greenGrey px-8 py-[34px] rounded-lg mb-60">
          <style>{`
              .titleFontSize{
                font-size: ${displayTitleSize}pt;
              }
              .contentFontSize{
                font-size: ${displayContentSize}pt;
              }
            `}</style>
          <div
            onMouseOver={() => setShowTitleSetting(true)}
            onMouseOut={() => setShowTitleSetting(false)}
          >
            <FontSetting
              visible={showTitleSetting}
              size={displayTitleSize}
              setSize={setDisplayTitleSize}
            />
            <h1 className="titleFontSize">Black Ops One</h1>
          </div>
          <div
            onMouseOver={() => setShowContentSetting(true)}
            onMouseOut={() => setShowContentSetting(false)}
          >
            <FontSetting
              visible={showContentSetting}
              size={displayContentSize}
              setSize={setDisplayContentSize}
            />
            <p className="contentFontSize">
              happy happyhappy happyhappy happyhappy happyhappy happyhappy
              happyhappy happy
            </p>
          </div>
        </div>

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
              <PlusIco
                className="w-8"
                onClick={() => {
                  putFontSetToBox({
                    family: "Noto Sans",
                    weight: "bold",
                    size: 32,
                  });
                }}
              />
            </div>
            {/* 2nd set */}
            <div className="flex w-5/12 justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-4xl">Noto Sans</h1>
                <p>San-Serif, {displayContentSize}</p>
              </div>
              <PlusIco
                className="w-8"
                onClick={() => {
                  putFontSetToBox({
                    family: "Noto Sans",
                    weight: "bold",
                    size: 12,
                  });
                }}
              />
            </div>
          </div>
        </div>

        {/* font info section */}
        <div className="mb-96">
          <h1 className={subTitleStyle}>FONT INFO</h1>
          {/* <FontCard idx={0} />
        <FontCard idx={1}/> */}
          <HatIco className="absolute w-full left-0 right-0" />
        </div>

        {/* user guide section */}
        <div className="mb-40">
          <h1 className={subTitleStyle}>HOW TO USE</h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {/* 해당되는 태그만 보이기 */}
            {tagList.map((tag) => {
              return (
                <h1
                  key={tag.id + tag.name + "selected"}
                  className={`px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
                  bg-fog
                `}
                >
                  {tag.name}
                </h1>
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
