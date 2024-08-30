import SearchInput from "@/components/SearchInput";
import SizedBox from "@/components/SizedBox";
import { HatIco } from "../../../public/svgs";
import { SortCriteria } from "@/types/types";

type SearchInputSectionProps = {
  sortCrit: string;
  handleSortCrit: (crit: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputText: () => void;
  inputVal: string;
};

const SearchInputSection = ({
  sortCrit,
  handleSortCrit,
  onInputChange,
  searchInputText,
  inputVal,
}: SearchInputSectionProps) => {
  const sortBtnColor = {
    off: "text-greenGrey",
    on: "text-yellow",
  };

  const SORTCRIT: SortCriteria = {
    // sort: alpha | date | popularity | style | trending.
    Trending: "trending",
    Popular: "popularity",
    Newest: "date",
    Name: "alpha",
  };

  return (
    <div className="mobile:w-10/12 w-9/12 flex flex-col justify-center items-center">
      <SearchInput
        inputVal={inputVal}
        onInputChange={onInputChange}
        searchInputText={searchInputText}
      />
      <SizedBox height={1} />

      {/* pikachu red */}
      <HatIco className="mobile:invisible fill-red rotate-90 w-2/12 absolute left-0" />
      <HatIco className="mobile:invisible fill-red rotate-270 w-2/12 absolute right-0" />

      {/* SORT BY */}
      <div className="w-10/12 mobile:w-full flex items-baseline justify-between font-Bayon">
        <p className="text-white text-5xl mobile:text-xl shrink-0">SORT BY</p>
        {/* sorting option buttons */}
        <div className="w-2/3 mobile:h-5/6 text-greenGrey flex justify-between text-xl mobile:text-xs">
          {Object.keys(SORTCRIT).map((crit) => {
            return (
              <p
                className={`hover:text-yellow ${
                  sortCrit === SORTCRIT[crit]
                    ? sortBtnColor.on
                    : sortBtnColor.off
                }`}
                onClick={() => {
                  handleSortCrit(SORTCRIT[crit]);
                }}
              >
                {crit}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchInputSection;
