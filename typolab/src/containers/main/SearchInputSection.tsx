import SearchInput from "@/components/SearchInput";
import SizedBox from "@/components/SizedBox";
import React from "react";
import { HatIco } from "../../../public/svgs";

type Props = {};

const SearchInputSection = () => {
  return (
    <div className="w-9/12 flex flex-col justify-center items-center">
      <SearchInput />
      <SizedBox height={1} />

      {/* pikachu red */}
      <HatIco className="fill-red rotate-90 w-2/12 absolute left-0" />
      <HatIco className="fill-red rotate-270 w-2/12 absolute right-0" />

      {/* SORT BY */}
      <div className="w-10/12 mobile:w-full flex items-baseline font-Bayon">
        <p className="text-white text-5xl mobile:text-xl shrink-0">SORT BY</p>
        {/* sorting option buttons */}
        <div className="w-full text-greenGrey flex justify-between text-xl mobile:text-sm">
          <p className=" hover:text-yellow">TRENDING</p>
          <p className=" hover:text-yellow">MOST POPULAR</p>
          <p className=" hover:text-yellow">NEWEST</p>
          <p className=" hover:text-yellow">NAME</p>
        </div>
      </div>
    </div>
  );
};

export default SearchInputSection;
