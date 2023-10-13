"use client";

import React, { useState } from "react";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { DotLine, HatIco, PlusIco } from "../../../public/svgs";
import BoxCard from "@/containers/box/BoxCard";

type Props = {};

const Box = (props: Props) => {
  const subTitleStyle = "font-Bayon text-6xl pb-8";
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
          <BoxCard />
          <BoxCard />
          <BoxCard />
        </div>
        <div className="w-10/12 flex flex-col items-end">
          <DotLine className="w-full mb-6" />
          <p>Black Ops One Regular 99pt</p>
          <p>Black Ops One Regular 99pt</p>
          <p>Black Ops One Regular 99pt</p>
          <DotLine className="w-full mt-6 mb-6" />
          <button className="flex h-auto px-8 py-4 bg-darkGreen text-white font-semibold rounded-full justify-center items-center">
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
