import SearchInput from "@/components/SearchInput";
import SizedBox from "@/components/SizedBox";
import React, { Dispatch, SetStateAction } from "react";
import { HatIco } from "../../../public/svgs";
import { SortCriteria } from "@/types/types";

type Props = {
  sortCrit: string;
  setSortCrit: Dispatch<SetStateAction<string>>;
  sortCriteria: SortCriteria;
};

const SearchInputSection = (props: Props) => {
  const sortBtnColor = {
    off: "text-greenGrey",
    on: "text-yellow",
  };
  return (
    <div className="mobile:w-10/12 w-9/12 flex flex-col justify-center items-center">
      <SearchInput />
      <SizedBox height={1} />

      {/* pikachu red */}
      <HatIco className="mobile:invisible fill-red rotate-90 w-2/12 absolute left-0" />
      <HatIco className="mobile:invisible fill-red rotate-270 w-2/12 absolute right-0" />

      {/* SORT BY */}
      <div className="w-10/12 mobile:w-full flex items-baseline justify-between font-Bayon">
        <p className="text-white text-5xl mobile:text-xl shrink-0">SORT BY</p>
        {/* sorting option buttons */}
        <div className="w-2/3 mobile:h-5/6 text-greenGrey flex justify-between text-xl mobile:text-xs">
          <p
            className={`hover:text-yellow ${
              props.sortCrit === props.sortCriteria.Trending
                ? sortBtnColor.on
                : sortBtnColor.off
            }`}
            onClick={() => {
              props.setSortCrit(props.sortCriteria.Trending);
            }}
          >
            TRENDING
          </p>
          <p
            className={`hover:text-yellow ${
              props.sortCrit === props.sortCriteria.Popular
                ? sortBtnColor.on
                : sortBtnColor.off
            }`}
            onClick={() => {
              props.setSortCrit(props.sortCriteria.Popular);
            }}
          >
            MOST POPULAR
          </p>
          <p
            className={`hover:text-yellow ${
              props.sortCrit === props.sortCriteria.Newest
                ? sortBtnColor.on
                : sortBtnColor.off
            }`}
            onClick={() => {
              props.setSortCrit(props.sortCriteria.Newest);
            }}
          >
            NEWEST
          </p>
          <p
            className={`hover:text-yellow ${
              props.sortCrit === props.sortCriteria.Name
                ? sortBtnColor.on
                : sortBtnColor.off
            }`}
            onClick={() => {
              props.setSortCrit(props.sortCriteria.Name);
            }}
          >
            NAME
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchInputSection;
