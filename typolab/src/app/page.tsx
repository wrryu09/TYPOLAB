"use client";

import React, { useRef } from "react";
import { LogoIco, MainTxt } from "../../public/svgs";
import SizedBox from "@/components/SizedBox";
import Footer from "@/components/Footer";
import LineTxt from "@/containers/main/LineTxt";
import MainBtns from "@/containers/main/MainBtns";
import SearchSection from "@/containers/main/SearchSection";

const MainPage = (): JSX.Element => {
  // scroll to search section
  const searchRef = useRef<HTMLDivElement | null>(null);
  const executeScroll = () => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView();
    }
  };

  return (
    <div className="bg-fog h-full">
      <LogoIco
        width={32}
        height={32}
        className="mobile:ml-4 mobile:w-6 ml-8 pt-4 fill-darkGreen"
      />
      <div className="flex flex-col items-center">
        <p className="pb-[32rem]">BEST FONT PAIRING FOR YOUR SERVICE</p>

        {/* main btn */}
        <MainBtns executeScroll={executeScroll} />
        <LineTxt />
        <MainTxt className="p-8 mobile:p-4 fill-darkGreen pb-[10rem]" />

        {/* search section */}
        <SearchSection searchRef={searchRef} />

        <SizedBox height={10} />
        <LogoIco width={24} height={24} className="fill-darkGreen mobile:w-4" />
        <SizedBox height={50} />
        <Footer />
      </div>
    </div>
  );
};
export default MainPage;
