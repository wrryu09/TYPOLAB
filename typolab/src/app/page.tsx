"use client";

import React from "react";
import Image from "next/image";
import { HatIco, SearchTitleIco } from "../../public/svgs";
import SizedBox from "@/components/SizedBox";
import Wrapper from "@/components/Wrapper";
import FullLine from "@/components/FullLine";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";

const MainPage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="bg-fog h-full">
      {/* logo */}
      <div className="mobile:ml-4 ml-8 pt-4">
        <Logo />
      </div>

      <div className="flex flex-col items-center">
        <p>BEST FONT PAIRING FOR YOUR SERVICE</p>
        <SizedBox height={34} />

        {/* main btn */}
        <div className="flex text-left w-10/12 mobile:flex-col">
          {/* pair */}
          <div
            className="flex flex-col"
            onClick={() => {
              router.push("/pair");
            }}
          >
            <HatButton />
            <p className="text-5xl font-bold">PAIR</p>
          </div>

          {/* search */}
          <div
            className="flex flex-col"
            onClick={() => {
              // router.push("/serach");
              console.log("move to search section");
            }}
          >
            <HatButton />
            <p className="text-5xl font-bold">SEARCH</p>
          </div>

          {/* box */}
          <div
            className="flex flex-col"
            onClick={() => {
              router.push("/box");
            }}
          >
            <HatButton />
            <p className="text-5xl font-bold">BOX</p>
          </div>
        </div>
        {/* ~main btn */}

        <SizedBox height={20} />
        <LineTxt />
        <SizedBox height={10} />
        <h1 className="font-extrabold text-9xl mobile:text-6xl">TYPOLAB</h1>
        <SizedBox height={10} />

        {/* search section */}
        <Image alt="search section" src={HatIco} />
        <div className="bg-darkGreen w-full flex flex-col items-center">
          <SizedBox height={10} />
          <FullLine color={"yellow"} />
          <SizedBox height={10} />
          <Image
            alt="search title"
            src={SearchTitleIco}
            className="w-9/12 max-w-3xl"
          />
          <SizedBox height={10} />
          <div className=" bg-greenGrey">
            <Logo />
          </div>
          <SizedBox height={20} />
          <Image
            alt="end of search section"
            src={HatIco}
            className="bg-white"
          />
        </div>
        <Image
          alt="end of search section"
          src={HatIco}
          className="rotate-180"
        />
        {/* ~search section */}

        <SizedBox height={10} />
        <Logo />

        <SizedBox height={50} />
        <Footer />
      </div>
      <SizedBox height={16} />
    </div>
  );
};

const HatButton = () => {
  return <Image src={HatIco} alt="hatIcon" />;
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
