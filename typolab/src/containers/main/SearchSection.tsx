import React, { useEffect, useState } from "react";
import {
  HatIco,
  LogoIco,
  NoResult,
  SearchTitleIco,
} from "../../../public/svgs";
import SizedBox from "@/components/SizedBox";
import FullLine from "@/components/FullLine";
import SearchInputSection from "./SearchInputSection";
import FontCard from "@/components/FontCard";
import { getFontList } from "@/services/apis/googleFont.apis";
import { SortCriteria } from "@/types/types";

type Props = {
  searchRef: React.MutableRefObject<HTMLDivElement | null>;
};

const SearchSection = (props: Props) => {
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
  return (
    <div className="flex flex-col items-center">
      <HatIco width={"25%"} className="fill-darkGreen" />
      <div
        ref={props.searchRef}
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
              return <FontCard key={"fontCard" + idx} idx={idx} data={data} />;
            })}
          </div>
        ) : (
          <NoResult className="w-8/12" />
        )}

        <SizedBox height={20} />
        <LogoIco width={24} height={24} className="fill-white mobile:w-4" />
        <SizedBox height={20} />
        <HatIco width={"25%"} className="fill-white" />
      </div>
      <HatIco width={"25%"} className="fill-darkGreen rotate-180" />
    </div>
  );
};

export default SearchSection;
