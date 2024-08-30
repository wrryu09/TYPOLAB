import { lazy, Suspense, useEffect, useState } from "react";
import {
  HatIco,
  LogoIco,
  NoResult,
  SearchTitleIco,
} from "../../../public/svgs";
import FullLine from "@/components/FullLine";
import SearchInputSection from "./SearchInputSection";
import { getFontList } from "@/services/apis/googleFont.apis";
const LazyCardSection = lazy(() => import("../search/CardSection"));
type SearchSectionProps = {
  searchRef: React.MutableRefObject<HTMLDivElement | null>;
};

const SearchSection = ({ searchRef }: SearchSectionProps) => {
  const [fontList, setFontList] = useState([]);
  const [sortCrit, setSortCrit] = useState("trending");

  // input text value
  const [inputVal, setInputVal] = useState("");

  const handleSortCrit = (crit: string) => {
    setSortCrit(crit);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const getFontListWithCrit = async (textVal?: string) => {
    const fontList = await getFontList(sortCrit, textVal);
    if (!!fontList == false) {
      setFontList([]);
    }
    const filteredFontList = fontList.items.filter((_: Object, idx: number) => {
      return idx < 15;
    });
    setFontList(filteredFontList);
  };

  /** 유저 인풋으로 폰트 검색 */
  const searchInputText = () => {
    getFontListWithCrit(inputVal);
  };

  useEffect(() => {
    getFontListWithCrit();
  }, [sortCrit]);

  return (
    <div className="flex flex-col items-center">
      <HatIco width={"25%"} className="fill-darkGreen" />
      <div
        ref={searchRef}
        className="w-screen bg-darkGreen flex flex-col items-center"
      >
        <div className="mobile:mt-[6rem] w-full flex justify-center mt-[10rem]">
          <FullLine color={"yellow"} />
        </div>
        <SearchTitleIco className="mobile:pt-[3rem] mobile:pb-[4rem] pt-[10rem] pb-[10rem] w-9/12 max-w-3xl" />
        <SearchInputSection
          sortCrit={sortCrit}
          handleSortCrit={handleSortCrit}
          onInputChange={onInputChange}
          searchInputText={searchInputText}
          inputVal={inputVal}
        />

        {fontList.length > 0 ? (
          <Suspense fallback={<>loading</>}>
            <LazyCardSection fontList={fontList} />
          </Suspense>
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
