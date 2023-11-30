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
  const [text, setText] = useState("다람쥐 헌 쳇바퀴에 타고파");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onTxtChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
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
    <div className="w-full flex flex-col items-start gap-y-2 border border-greenGrey px-8 py-4 rounded-lg mb-10">
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
          value={text}
          className={`fontSize${props.boxNum} bg-fog w-full`}
          placeholder="Title"
          onChange={onTxtChange}
        />
      </div>
    </div>
  );
};

export default PreviewBox;
