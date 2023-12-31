import React, { useState } from "react";
import BoxSection from "./BoxSection";
import FontInfo from "./FontInfo";
import UserGuide from "./UserGuide";
import { FontInfoFromDB, FontNameVarSet, Tag } from "@/types/types";

type Props = {
  displayFirstSize: number;
  displayScndSize: number;
  koreanFont: FontNameVarSet;
  latinFont: FontNameVarSet;
  subTitleStyle: string;
  selectedFirstInfo: FontInfoFromDB;
  selectedScndInfo: FontInfoFromDB;
  tagList: {
    classTag: Tag[];
    useTag: Tag[];
  };
};

const PairedInfo = (props: Props) => {
  // Is fontSet in box
  const [firstInBox, setFirstInBox] = useState(false);
  const [scndInBox, setScndInBox] = useState(false);
  return (
    <>
      {/* box section */}
      <BoxSection
        displayFirstSize={props.displayFirstSize}
        displayScndSize={props.displayScndSize}
        firstInBox={firstInBox}
        koreanFont={props.koreanFont}
        latinFont={props.latinFont}
        scndInBox={scndInBox}
        setFirstInBox={setFirstInBox}
        setScndInBox={setScndInBox}
        subTitleStyle={props.subTitleStyle}
      />

      {/* font info section */}
      <FontInfo
        selectedFirstInfo={props.selectedFirstInfo}
        selectedScndInfo={props.selectedScndInfo}
        subTitleStyle={props.subTitleStyle}
      />

      {/* user guide section */}
      <UserGuide
        koreanFont={props.koreanFont}
        latinFont={props.latinFont}
        selectedFirstInfo={props.selectedFirstInfo}
        selectedScndInfo={props.selectedScndInfo}
        subTitleStyle={props.subTitleStyle}
        tagList={props.tagList}
      />
    </>
  );
};

export default PairedInfo;
