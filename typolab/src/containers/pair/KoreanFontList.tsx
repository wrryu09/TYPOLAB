import { FontNameNVar } from "@/types/types";
import { SetStateAction } from "react";
import KrSelectionBox from "./KrSelectionBox";

type KoreanFontListProps = {
  fontList: FontNameNVar[];
  setShowFontList: () => void;
  selectedVar: string;
  selectedFont: FontNameNVar;
  setSelectedVar: React.Dispatch<SetStateAction<string>>;
  handleSelectFont: ({ name, variants }: FontNameNVar) => void;
};

const KoreanFontList = ({
  fontList,
  setShowFontList,
  selectedVar,
  selectedFont,
  setSelectedVar,
  handleSelectFont,
}: KoreanFontListProps) => {
  return (
    <div className="z-20">
      {/* modal background */}
      <div
        className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80"
        onClick={setShowFontList}
      />

      {/* modal */}
      <div className="absolute w-11/12 top-6 left-1/2 -translate-x-1/2">
        {/* CHOOSE YOUR FONT */}
        <h2 className="mobile:text-4xl mobile:p-4 font-Bayon text-6xl p-8 text-white">
          Choose your font
        </h2>

        <div
          className={`mobile:w-full mobile:p-4 w-[90%] h-fit p-8 rounded-lg border border-greenGrey bg-fog flex flex-col items-center`}
        >
          <div className="w-full flex flex-col mb-12">
            {/* font family */}
            <div className="text-greenGrey font-Bayon text-xl mb-2">
              Font Family
            </div>
            <div className="flex flex-col gap-2 mb-6">
              {fontList.map((fontName, idx) => {
                return (
                  <KrSelectionBox
                    fontName={fontName}
                    idx={idx}
                    selectedFont={selectedFont}
                    selectedVar={selectedVar}
                    handleSelectFont={handleSelectFont}
                    setSelectedVar={setSelectedVar}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanFontList;
