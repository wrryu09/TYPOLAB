"use client";

import React from "react";
import Image from "next/image";
import { HatIco, LogoIco, MainTxt, SearchTitleIco } from "../../public/svgs";
import SizedBox from "@/components/SizedBox";
import Wrapper from "@/components/Wrapper";
import FullLine from "@/components/FullLine";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const MainPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="bg-fog h-full">
      <LogoIco
        width={32}
        height={32}
        className="mobile:ml-4 mobile:w-6 ml-8 pt-4 fill-darkGreen"
      />
      <div className="flex flex-col items-center">
        <p>BEST FONT PAIRING FOR YOUR SERVICE</p>
        <SizedBox height={34} />

        {/* main btn */}
        <div className="flex text-left justify-center w-10/12 mobile:flex-col text-darkGreen">
          {/* pair */}
          <div
            className="flex flex-col hover:text-red"
            onClick={() => {
              router.push("/pair");
            }}
          >
            <HatIco width={"100%"} />
            <p className="text-5xl font-bold">PAIR</p>
          </div>

          {/* search */}
          <div
            className="flex flex-col  hover:text-yellow"
            onClick={() => {
              // router.push("/serach");
              console.log("move to search section");
            }}
          >
            <HatIco width={"100%"} />
            <p className="text-5xl font-bold">SEARCH</p>
          </div>

          {/* box */}
          <div
            className="flex flex-col  hover:text-blueblue"
            onClick={() => {
              router.push("/box");
            }}
          >
            <HatIco width={"100%"} />
            <p className="text-5xl font-bold">BOX</p>
          </div>
        </div>
        {/* ~main btn */}

        <SizedBox height={20} />
        <LineTxt />
        <SizedBox height={10} />
        <MainTxt className="p-8 mobile:p-4" />
        <SizedBox height={10} />

        {/* search section */}
        <HatIco width={"25%"} className="fill-darkGreen" />
        <div className="bg-darkGreen w-full flex flex-col items-center">
          <SizedBox height={10} />
          <FullLine color={"yellow"} />
          <SizedBox height={10} />
          <SearchTitleIco className="w-9/12 max-w-3xl" />
          <SizedBox height={10} />
          <LogoIco width={24} height={24} className="fill-white mobile:w-4" />
          <SizedBox height={20} />
          <HatIco width={"25%"} className="fill-white" />
        </div>
        <HatIco width={"25%"} className="fill-darkGreen rotate-180" />
        {/* ~search section */}

        <SizedBox height={10} />
        <LogoIco width={24} height={24} className="fill-darkGreen mobile:w-4" />
        <SizedBox height={50} />
        <Footer />
      </div>
      <SizedBox height={16} />
    </div>
  );
};

const LineTxt = () => {
  return (
    <div className="w-full flex text-center items-center">
      <div className="w-full h-px bg-greenGrey ml-6"></div>
      <div className="flex-shrink-0 pr-5 pl-5">
        <Wrapper type="col">
          <p>font recommendation</p>
          <p>based on your tag selection</p>
        </Wrapper>
      </div>
      <div className="w-full h-px bg-greenGrey mr-6"></div>
    </div>
  );
};

export default MainPage;
