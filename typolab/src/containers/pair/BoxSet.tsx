import React from "react";
import { CheckIco, PlusIco } from "../../../public/svgs";
import putFontSetToBox from "@/services/putFontSetToBox";
import { FontNameVarSet } from "@/types/types";

type Props = {
  font: FontNameVarSet;
  displaySize: number;
  isInBox: boolean;
  setItInBox: React.Dispatch<React.SetStateAction<boolean>>;
  boxNum: 1 | 2;
};

const BoxSet = (props: Props) => {
  return (
    <div className="w-5/12">
      {props.font.name !== "none" ? (
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <h1 className={`text-4xl fontFamily${props.boxNum}FontFam`}>
              {props.font.name}
            </h1>
            <p>
              {props.font.variants}, {props.displaySize}
            </p>
          </div>
          {props.isInBox ? (
            <CheckIco className={"fill-red w-8"} />
          ) : (
            <PlusIco
              className="w-8"
              onClick={() => {
                putFontSetToBox(
                  {
                    family: props.font.name,
                    weight: props.font.variants,
                    size: props.displaySize,
                  },
                  props.setItInBox
                );
              }}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <h1 className="text-4xl">폰트를 선택해주세요!</h1>
        </div>
      )}
    </div>
  );
};

export default BoxSet;
