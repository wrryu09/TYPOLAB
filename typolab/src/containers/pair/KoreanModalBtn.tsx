import { FontNameNVar, FontNameVarSet } from "@/types/types";
import React, { SetStateAction } from "react";

type Props = {
  selectedFont: FontNameNVar;
  selectedVar: string;
  setFont: React.Dispatch<SetStateAction<FontNameVarSet>>;
  putFontData: (fontName: string) => void;
  setShowFontList: React.Dispatch<SetStateAction<boolean>>;
};

const KoreanModalBtn = (props: Props) => {
  const btnCss = "text-center text-white text-7xl font-['Bayon']";
  return (
    <div className="fixed bottom-8 z-30">
      {props.selectedFont.name !== "none" ? (
        <div
          className={`mobile:w-full hover:bg-red w-10/12 px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex`}
          onClick={() => {
            // set font if only selected
            if (props.selectedFont.name !== "none") {
              props.setFont({
                name: props.selectedFont.name,
                variants: props.selectedVar,
              });
              props.putFontData(props.selectedFont.name);
            }
            props.setShowFontList(false);
          }}
        >
          <div className={btnCss}>ok</div>
        </div>
      ) : (
        <div
          className={`mobile:w-full hover:bg-red px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex`}
          onClick={() => {
            props.setShowFontList(false);
          }}
        >
          <div className={btnCss}>close</div>
        </div>
      )}
    </div>
  );
};

export default KoreanModalBtn;
