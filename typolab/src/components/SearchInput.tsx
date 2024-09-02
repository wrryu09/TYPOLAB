import React from "react";
import { LogoIco } from "../../public/svgs";
import SizedBox from "./SizedBox";

type SearchInputProps = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputText: () => void;
};

const SearchInput = ({ onInputChange, searchInputText }: SearchInputProps) => {
  return (
    <div className="w-full h-12 bg-white rounded-full flex items-center justify-between">
      <input
        placeholder="Search your font"
        className="w-full h-full rounded-full p-4 m-4 bg-fog"
        onChange={onInputChange}
      />
      <LogoIco
        width={24}
        height={24}
        className="fill-darkGreen"
        onClick={searchInputText}
      />
      <SizedBox width={1} />
    </div>
  );
};

export default SearchInput;
