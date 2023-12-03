import React, { useEffect, useState } from "react";
import {
  HatIco,
  LogoIco,
  NoResult,
  SearchTitleIco,
} from "../../../public/svgs";
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

  // input text value
  const [inputVal, setInputVal] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
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

  /** 유저 인풋으로 폰트 검색 */
  const searchInputText = () => {
    let textVal: string | undefined = "";
    if (inputVal === "") {
      textVal = undefined;
    } else {
      textVal = inputVal;
    }
    getFontList(sortCrit, textVal)
      .then((res) => {
        let fontListRes = res.data.items.filter((data: Object, idx: number) => {
          return idx < 15;
        });
        console.log(fontListRes);
        setFontList(fontListRes);
      })
      .catch((err) => {
        console.log(err);
        setFontList([]);
      });
  };
  return (
    <div className="flex flex-col items-center">
      <HatIco width={"25%"} className="fill-darkGreen" />
      <div
        ref={props.searchRef}
        className="w-screen bg-darkGreen flex flex-col items-center"
      >
        <div className="mobile:mt-[6rem] w-full flex justify-center mt-[10rem]">
          <FullLine color={"yellow"} />
        </div>
        <SearchTitleIco className="mobile:pt-[3rem] mobile:pb-[4rem] pt-[10rem] pb-[10rem] w-9/12 max-w-3xl" />
        <SearchInputSection
          sortCrit={sortCrit}
          setSortCrit={setSortCrit}
          sortCriteria={sortCriteria}
          onInputChange={onInputChange}
          searchInputText={searchInputText}
          inputVal={inputVal}
        />

        {fontList.length > 0 ? (
          <div className="mobile:mt-[4rem] w-full mt-[10rem] ml-8 mr-8 flex flex-wrap justify-center gap-y-6 gap-3 items-center">
            {fontList.map((data, idx) => {
              return <FontCard key={"fontCard" + idx} idx={idx} data={data} />;
            })}
          </div>
        ) : (
          <NoResult className="mobile:pt-[4rem] w-8/12 pt-[10rem]" />
        )}

        <LogoIco
          width={24}
          height={24}
          className="mobile:mt-[10rem] mobile:mb-[10rem] fill-white mobile:w-4 mt-[20rem] mb-[20rem]"
        />
        <HatIco width={"25%"} className="fill-white" />
      </div>
      <HatIco width={"25%"} className="fill-darkGreen rotate-180" />
    </div>
  );
};

export default SearchSection;
