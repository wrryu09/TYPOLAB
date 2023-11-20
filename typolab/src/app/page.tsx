"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  HatIco,
  LogoIco,
  MainTxt,
  NoResult,
  SearchTitleIco,
} from "../../public/svgs";
import SizedBox from "@/components/SizedBox";
import FullLine from "@/components/FullLine";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import SearchInputSection from "@/containers/main/SearchInputSection";
import LineTxt from "@/containers/main/LineTxt";
import FontCard from "@/components/FontCard";
import { getFontList } from "@/services/apis/googleFont.apis";
import { SortCriteria } from "@/types/types";

const MainPage = (): JSX.Element => {
  const router = useRouter();
  const [fontList, setFontList] = useState([]);
  const [sortCrit, setSortCrit] = useState("trending");
  const sortCriteria: SortCriteria = {
    // sort: alpha | date | popularity | style | trending.
    Trending: "trending",
    Popular: "popularity",
    Newest: "date",
    Name: "alpha",
  };
  useEffect(() => {
    getFontList(sortCrit)
      .then((res) => {
        let fontListRes = res.data.items.filter((data: Object, idx: number) => {
          return idx < 15;
        });
        console.log(fontListRes);
        setFontList(fontListRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortCrit]);

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
        <p>BEST FONT PAIRING FOR YOUR SERVICE</p>
        <SizedBox height={34} />

        {/* main btn */}
        <div className="flex text-left justify-center w-10/12 mobile:flex-col text-darkGreen font-Bayon">
          {/* pair */}
          <div
            className="flex flex-col hover:text-red"
            onClick={() => {
              router.push("/pair");
            }}
          >
            <HatIco width={"100%"} />
            <p className="text-5xl">PAIR</p>
          </div>

          {/* search */}
          <div
            className="flex flex-col  hover:text-yellow"
            onClick={executeScroll}
          >
            <HatIco width={"100%"} />
            <p className="text-5xl">SEARCH</p>
          </div>

          {/* box */}
          <div
            className="flex flex-col  hover:text-blueblue"
            onClick={() => {
              router.push("/box");
            }}
          >
            <HatIco width={"100%"} />
            <p className="text-5xl">BOX</p>
          </div>
        </div>
        {/* ~main btn */}

        <SizedBox height={20} />
        <LineTxt />
        <SizedBox height={10} />
        <MainTxt className="p-8 mobile:p-4 fill-darkGreen" />
        <SizedBox height={10} />

        {/* search section */}
        <HatIco width={"25%"} className="fill-darkGreen" />
        <div
          ref={searchRef}
          className="bg-darkGreen w-full flex flex-col items-center"
        >
          <SizedBox height={10} />
          <FullLine color={"yellow"} />
          <SizedBox height={10} />
          <SearchTitleIco className="w-9/12 max-w-3xl" />
          <SizedBox height={10} />
          <SearchInputSection
            sortCrit={sortCrit}
            setSortCrit={setSortCrit}
            sortCriteria={sortCriteria}
          />
          <SizedBox height={10} />

          {fontList.length > 0 ? (
            <div className="w-full ml-8 mr-8 flex flex-wrap justify-center gap-y-6 gap-3 items-center">
              {fontList.map((data, idx) => {
                return (
                  <FontCard key={"fontCard" + idx} idx={idx} data={data} />
                );
              })}
            </div>
          ) : (
            <NoResult className="w-8/12" />
          )}

          <SizedBox height={10} />

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
export default MainPage;
