import React from "react";
import { LogoIco } from "../../public/svgs";
import SizedBox from "./SizedBox";

type Props = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputVal: string;
  searchInputText: () => void;
};

const SearchInput = (props: Props) => {
  return (
    <div className="w-full h-12 bg-white rounded-full flex items-center justify-between">
      <input
        placeholder="Search your font"
        className="w-full h-full rounded-full p-4 m-4 bg-fog"
        value={props.inputVal}
        onChange={props.onInputChange}
      />
      <LogoIco
        width={24}
        height={24}
        className="fill-darkGreen"
        onClick={() => {
          console.log("search");
          props.searchInputText();
        }}
      />
      <SizedBox width={1} />
    </div>
  );
};

export default SearchInput;
