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
    <div className="mobile:w-9/12 w-5/12">
      {props.font.name !== "none" ? (
        <div className="flex justify-between">
          <div className="flex flex-col items-start text-start">
            <h1
              className={`mobile:text-2xl text-4xl fontFamily${props.boxNum}FontFam`}
            >
              {props.font.name}
            </h1>
            <p className="mobile:text-sm">
              {props.font.variants}, {props.displaySize}pt
            </p>
          </div>
          {props.isInBox ? (
            <CheckIco className={"mobile:w-6 shrink-0 fill-red w-8"} />
          ) : (
            <PlusIco
              className="mobile:w-6 shrink-0 w-8"
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
      ) : null}
    </div>
  );
};

export default BoxSet;
