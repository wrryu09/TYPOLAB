import React, { useRef, useState } from "react";
import FontSetting from "../search/FontSetting";

type Props = {
  displayTitleSize: number;
  displayContentSize: number;
  setDisplayTitleSize: React.Dispatch<React.SetStateAction<number>>;
  setDisplayContentSize: React.Dispatch<React.SetStateAction<number>>;
};

const FontDisplayBox = (props: Props) => {
  const [showTitleSetting, setShowTitleSetting] = useState(false);
  const [showContentSetting, setShowContentSetting] = useState(false);
  const [titleText, setTitleText] = useState("");

  // text area
  const [bodyText, setBodyText] = useState("");
  const textareaTitleRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBodyText(e.currentTarget.value);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleText(e.currentTarget.value);
    if (textareaTitleRef && textareaTitleRef.current) {
      textareaTitleRef.current.style.height = "0px";
      const scrollHeight = textareaTitleRef.current.scrollHeight;
      textareaTitleRef.current.style.height = scrollHeight + "px";
    }
  };
  return (
    <div className="w-full flex flex-col items-start gap-y-2 border border-greenGrey px-8 py-[34px] rounded-lg mb-60">
      <style>{`
              .titleFontSize{
                font-size: ${props.displayTitleSize}pt;
              }
              .contentFontSize{
                font-size: ${props.displayContentSize}pt;
              }
            `}</style>
      <div
        className="w-full"
        onMouseOver={() => setShowTitleSetting(true)}
        onMouseOut={() => setShowTitleSetting(false)}
      >
        <FontSetting
          visible={showTitleSetting}
          size={props.displayTitleSize}
          setSize={props.setDisplayTitleSize}
          min={20}
          max={120}
        />
        <textarea
          ref={textareaTitleRef}
          value={titleText}
          className="titleFontSize bg-fog w-full"
          placeholder="Title"
          onChange={onTitleChange}
        />
      </div>
      <div
        className="w-full"
        onMouseOver={() => setShowContentSetting(true)}
        onMouseOut={() => setShowContentSetting(false)}
      >
        <FontSetting
          visible={showContentSetting}
          size={props.displayContentSize}
          setSize={props.setDisplayContentSize}
          min={6}
          max={50}
        />
        <textarea
          className="contentFontSize bg-fog w-full"
          ref={textareaRef}
          value={bodyText}
          onChange={onBodyChange}
          placeholder="body"
        />
      </div>
    </div>
  );
};

export default FontDisplayBox;
