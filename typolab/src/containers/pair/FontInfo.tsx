import FontCard from "@/components/FontCard";
import React from "react";
import { HatIco } from "../../../public/svgs";
import { convertFontDBDatatoFontInfo } from "@/services/convertFontDBDatatoFontInfo";
import { FontInfoFromDB } from "@/types/types";

type Props = {
  subTitleStyle: string;
  selectedFirstInfo: FontInfoFromDB;
  selectedScndInfo: FontInfoFromDB;
};

const FontInfo = (props: Props) => {
  return (
    <div className="mobile:mb-0 mb-96">
      <h1 className={`${props.subTitleStyle} mb-40`}>FONT INFO</h1>
      {/* FONT CARDS */}
      <div className="relative w-screen flex">
        <div className="mobile:relative flex flex-wrap gap-4 z-10 absolute left-1/2 -translate-x-1/2 -top-32">
          {/* first FontCard */}
          {props.selectedFirstInfo.family !== "none" ? (
            <FontCard
              idx={0}
              data={convertFontDBDatatoFontInfo(props.selectedFirstInfo)}
            />
          ) : null}
          {props.selectedScndInfo.family !== "none" ? (
            <FontCard
              idx={1}
              data={convertFontDBDatatoFontInfo(props.selectedScndInfo)}
            />
          ) : null}
        </div>
        <HatIco className="left-0 right-0 absolute" />
      </div>
    </div>
  );
};

export default FontInfo;
