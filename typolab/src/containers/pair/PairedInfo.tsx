import BoxSection from "./BoxSection";
import FontInfo from "./FontInfo";
import UserGuide from "./UserGuide";
import { FontInfoFromDB, FontNameVarSet, Tag } from "@/types/types";

type PairedInfoProps = {
  displayFirstSize: number;
  displayScndSize: number;
  koreanFont: FontNameVarSet;
  latinFont: FontNameVarSet;
  selectedFirstInfo: FontInfoFromDB;
  selectedScndInfo: FontInfoFromDB;
  tagList: {
    classTag: Tag[];
    useTag: Tag[];
  };
};

const PairedInfo = ({
  displayFirstSize,
  displayScndSize,
  koreanFont,
  latinFont,
  selectedFirstInfo,
  selectedScndInfo,
  tagList,
}: PairedInfoProps) => {
  return (
    <>
      {/* box section */}
      <BoxSection
        displayFirstSize={displayFirstSize}
        displayScndSize={displayScndSize}
        koreanFont={koreanFont}
        latinFont={latinFont}
      />

      {/* font info section */}
      <FontInfo
        selectedFirstInfo={selectedFirstInfo}
        selectedScndInfo={selectedScndInfo}
      />

      {/* user guide section */}
      <UserGuide
        koreanFont={koreanFont}
        latinFont={latinFont}
        selectedFirstInfo={selectedFirstInfo}
        selectedScndInfo={selectedScndInfo}
        tagList={tagList}
      />
    </>
  );
};

export default PairedInfo;
