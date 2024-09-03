"use client";

import React, { useEffect, useState } from "react";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { DotLine, HatIco } from "../../../public/svgs";
import BoxCard from "@/containers/box/BoxCard";
import { FontSet, FontSetArr } from "@/types/types";
import GenerateBtn from "@/containers/box/GenerateBtn";
import removeFontSetFromBox from "@/services/removeFontSetFromBox";

const Box = () => {
  const [boxContent, setBoxContent] = useState<FontSetArr>();

  const bringFontsFromLocalStorage = () => {
    const currentBox = localStorage.getItem("box");
    if (currentBox && currentBox !== "null" && currentBox !== "undefined") {
      const content: FontSetArr = JSON.parse(currentBox);
      setBoxContent(content);
    }
  };

  const removeItemFromBox = (font: FontSet) => {
    removeFontSetFromBox(font);
    // catch changes in storage
    bringFontsFromLocalStorage();
  };

  // view storage on load
  useEffect(() => {
    bringFontsFromLocalStorage();
  }, []);
  return (
    <div className="bg-blueblue h-full text-darkGreen flex flex-col items-center">
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <div className="mobile:mt-[4rem] mobile:mb-[20rem] w-10/12 flex flex-col text-center items-center justify-center mt-[10rem] mb-[30rem]">
        <h1 className={"subTitleStyle"}>MY BOX</h1>
        <div className="mobile:mb-20 w-full items-center flex flex-col gap-y-8 mb-40">
          {boxContent &&
            boxContent.map((ele, idx) => {
              return (
                <BoxCard
                  key={ele.family + ele.weight + ele.size}
                  fontSet={ele}
                  removeItemFromBox={removeItemFromBox}
                  idx={idx}
                />
              );
            })}
        </div>
        <div className="w-10/12 flex flex-col items-end">
          <DotLine className="w-full mb-6" />
          {boxContent &&
            boxContent.map((ele) => {
              return (
                <p key={ele.family + ele.weight + ele.size + "receipt"}>
                  {ele.family} {ele.weight} {ele.size}pt
                </p>
              );
            })}
          <DotLine className="w-full mt-6 mb-6" />
          <GenerateBtn />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Box;
