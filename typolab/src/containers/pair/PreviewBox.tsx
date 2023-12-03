import React, { useRef, useState } from "react";
import FontSetting from "../search/FontSetting";
import { FontNameVarSet } from "@/types/types";

type Props = {
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  fontFamily: FontNameVarSet;
  boxNum: 1 | 2;
};

const PreviewBox = (props: Props) => {
  const [showSetting, setShowSetting] = useState(false);
  const [text1, setText1] = useState("다람쥐 헌 쳇바퀴에 타고파");
  const [text2, setText2] = useState(
    "“A wizard’s job is to vex chumps quickly in fog.”"
  );
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onTxtChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.boxNum === 1) {
      // korean
      setText1(e.currentTarget.value);
    } else {
      // english
      setText2(e.currentTarget.value);
    }
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  const onFontSizeChange = (e: EventTarget & HTMLInputElement) => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  return (
    <div className="mobile:px-6 w-full flex flex-col items-start gap-y-2 border border-greenGrey px-8 py-4 rounded-lg mb-10">
      <style>{`
              .fontSize${props.boxNum}{
                font-family: ${
                  props.fontFamily.name && props.fontFamily.name !== "none"
                    ? props.fontFamily.name
                    : "Inter"
                };
                font-weight: ${props.fontFamily.variants};
                font-size: ${props.fontSize}pt;
              }
            `}</style>
      <div
        className="w-full"
        onMouseOver={() => setShowSetting(true)}
        onMouseOut={() => setShowSetting(false)}
      >
        <FontSetting
          visible={showSetting}
          size={props.fontSize}
          setSize={props.setFontSize}
          fontFamily={props.fontFamily}
          onChange={onFontSizeChange}
          min={16}
          max={120}
        />
        <textarea
          ref={textareaRef}
          value={props.boxNum === 1 ? text1 : text2}
          className={`fontSize${props.boxNum} bg-fog w-full`}
          placeholder="Title"
          onChange={onTxtChange}
        />
      </div>
    </div>
  );
};

export default PreviewBox;
