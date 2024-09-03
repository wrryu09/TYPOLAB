import { useState } from "react";
import { CheckIco, PlusIco } from "../../../public/svgs";
import putFontSetToBox from "@/services/putFontSetToBox";
import { FontNameVarSet } from "@/types/types";
import removeFontSetFromBox from "@/services/removeFontSetFromBox";
import isFontSetInBox from "@/services/isFontSetInBox";

type BoxSetProps = {
  font: FontNameVarSet;
  displaySize: number;
  boxNum: 1 | 2;
};

const BoxSet = ({ font, displaySize, boxNum }: BoxSetProps) => {
  const [fontInBox, setFontInBox] = useState(
    isFontSetInBox({ family: font.name, size: 32, weight: font.variants })
  );

  const isInBox = () => {
    setFontInBox(true);
  };
  const isNotInBox = () => {
    setFontInBox(false);
  };

  const handleClick = () => {
    if (fontInBox) {
      removeFontSetFromBox({
        family: font.name,
        size: 32,
        weight: font.variants,
      });
      isNotInBox();
    } else {
      putFontSetToBox(
        {
          family: font.name,
          weight: font.variants,
          size: displaySize,
        },
        isInBox
      );
    }
  };
  return (
    <div className="mobile:w-9/12 w-5/12">
      {font.name !== "none" && (
        <div className="flex justify-between">
          <div className="flex flex-col items-start text-start">
            <h1
              className={`mobile:text-2xl text-4xl fontFamily${boxNum}FontFam`}
            >
              {font.name}
            </h1>
            <p className="mobile:text-sm">
              {font.variants}, {displaySize}pt
            </p>
          </div>
          <div onClick={handleClick}>
            {fontInBox ? (
              <CheckIco className={"mobile:w-6 shrink-0 fill-red w-8"} />
            ) : (
              <PlusIco className="mobile:w-6 shrink-0 w-8" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxSet;
