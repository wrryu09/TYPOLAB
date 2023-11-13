"use client";

import React, { useEffect, useState } from "react";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { DotLine, HatIco, PlusIco } from "../../../public/svgs";
import BoxCard from "@/containers/box/BoxCard";
import { FontSet, FontSetArr } from "@/types/types";
import { useRouter } from "next/navigation";

type Props = {};

const Box = (props: Props) => {
  const router = useRouter();
  const [boxContent, setBoxContent] = useState<FontSetArr>();
  const subTitleStyle = "font-Bayon text-6xl pb-8";

  function removeItemFromBox(font: FontSet) {
    const storedArr = localStorage.getItem("box");
    if (storedArr && storedArr !== "null" && storedArr !== "undefined") {
      const storedData = JSON.parse(storedArr);
      const modArr = storedData.filter((ele: FontSet) => {
        return (
          ele.family !== font.family ||
          ele.weight !== font.weight ||
          ele.size !== font.size
        );
      });
      localStorage.setItem("box", JSON.stringify(modArr));
    }
    // catch changes in storage
    const currentBox = localStorage.getItem("box");
    if (currentBox && currentBox !== "null" && currentBox !== "undefined") {
      const content: FontSetArr = JSON.parse(currentBox);
      setBoxContent(content);
    }
  }

  // view storage on load
  useEffect(() => {
    console.log("useEffect");
    const currentBox = localStorage.getItem("box");
    if (currentBox && currentBox !== "null" && currentBox !== "undefined") {
      const content: FontSetArr = JSON.parse(currentBox);
      setBoxContent(content);
    }
  }, []);
  return (
    <div className="bg-blueblue h-full text-darkGreen flex flex-col items-center">
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
        <h1 className={subTitleStyle}>MY BOX</h1>
        <div className="w-full items-center flex flex-col gap-y-8 mb-40">
          {boxContent
            ? boxContent.map((ele) => {
                return (
                  <BoxCard
                    key={ele.family + ele.weight + ele.size}
                    fontSet={ele}
                    removeItemFromBox={removeItemFromBox}
                  />
                );
              })
            : null}
        </div>
        <div className="w-10/12 flex flex-col items-end">
          <DotLine className="w-full mb-6" />
          {boxContent
            ? boxContent.map((ele) => {
                return (
                  <p key={ele.family + ele.weight + ele.size + "receipt"}>
                    {ele.family} {ele.weight} {ele.size}pt
                  </p>
                );
              })
            : null}
          <DotLine className="w-full mt-6 mb-6" />
          <button
            className="flex h-auto px-8 py-4 bg-darkGreen text-white font-semibold rounded-full justify-center items-center"
            onClick={() => {
              router.push("/box/designSys");
            }}
          >
            GENERATE
          </button>
        </div>
      </div>
      <SizedBox height={30} />
      <Footer />
      <SizedBox height={20} />
    </div>
  );
};

export default Box;
