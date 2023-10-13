"use client";

import React from "react";
import { HatIco, LogoHatIco, LogoIco } from "../../../../public/svgs";
import BackArrow from "@/components/BackArrow";
import SizedBox from "@/components/SizedBox";

type Props = {};

const DesignSys = (props: Props) => {
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
      <div className="w-11/12">
        <div className="w-full flex flex-col text-center items-center justify-center">
          <h1 className={subTitleStyle}>DESIGN SYSTEM</h1>
          <div className="w-full flex flex-col bg-white px-8 py-14 rounded-lg">
            <p>Black Ops One Regular 99pt</p>
            <p>Black Ops One Regular 99pt</p>
            <p>Black Ops One Regular 99pt</p>
          </div>
        </div>
        <SizedBox height={10} />
        {/* export as */}
        <div>
          <h1 className={subTitleStyle}>EXPORT AS...</h1>
          {/* main btn */}
          <div className="flex text-left justify-center w-10/12 mobile:flex-col text-darkGreen font-Bayon">
            {/* PNG */}
            <div
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                console.log("png export");
              }}
            >
              <HatIco width={"100%"} />
              <p className="text-5xl">PNG</p>
            </div>

            {/* JPEG */}
            <div
              className="flex flex-col  hover:text-yellow"
              onClick={() => {
                console.log("jpeg export");
              }}
            >
              <HatIco width={"100%"} />
              <p className="text-5xl">JPEG</p>
            </div>

            {/* PDF */}
            <div
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                console.log("pdf export");
              }}
            >
              <HatIco width={"100%"} />
              <p className="text-5xl">PDF</p>
            </div>
          </div>
          {/* ~main btn */}
        </div>
        <SizedBox height={10} />

        {/* copy css */}
        <div>
          <h1 className={subTitleStyle}>COPY CSS</h1>
          <div>codepen</div>
        </div>

        <SizedBox height={20} />
        <LogoHatIco className="w-full" />
      </div>
    </div>
  );
};

export default DesignSys;
