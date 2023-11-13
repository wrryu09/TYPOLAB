import React, { useState } from "react";
import { HatIco } from "../../../public/svgs";
import { FontSet } from "@/types/types";

type Props = {
  fontSet: FontSet;
  removeItemFromBox(fontSet: FontSet): void;
  idx: number;
};

const BoxCard = (props: Props) => {
  const [fontAlias, setFontAlias] = useState<string>(
    props.fontSet.alias ? props.fontSet.alias : ""
  );

  const onAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontAlias(e.target.value);
  };

  const saveAlias = () => {
    console.log("save alias");
    const boxItem = localStorage.getItem("box");
    if (boxItem) {
      const boxItemList: [] = JSON.parse(boxItem);
      boxItemList.map((item: FontSet) => {
        if (item.family === props.fontSet.family) {
          item.alias = fontAlias;
        }
      });
      localStorage.setItem("box", JSON.stringify(boxItemList));
    }
  };
  return (
    <div className="w-10/12 h-[20rem] flex flex-col justify-center relative bg-white rounded-lg shadow ">
      <HatIco className="absolute rotate-270 w-1/5 right-0" />

      {/* remove btn */}
      <div
        className="absolute w-[15%] h-[8%] top-0 self-end m-3 bg-lightGrey rounded-sm"
        onClick={() => {
          props.removeItemFromBox(props.fontSet);
        }}
      />
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${props.fontSet.family}`}
      />
      <style>
        {`.fontFamily${props.idx}{
    font-family: ${props.fontSet.family};
    font-weight: ${props.fontSet.weight};
  }`}
      </style>
      {/* text section */}
      <div className="flex flex-col items-start pl-[5%]">
        <p>
          {props.fontSet.weight}, {props.fontSet.size}pt
        </p>
        <h1 className={`text-4xl fontFamily${props.idx}`}>
          {props.fontSet.family}
        </h1>

        {/* alias input */}
        <div className="flex mt-3 gap-x-3">
          <input
            type="text"
            className="bg-fog rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px]"
            placeholder="폰트 별명 입력"
            value={fontAlias}
            onChange={onAliasChange}
          />
          <button
            className="bg-darkGreen text-white hover:bg-yellow hover:text-darkGreen py-2 px-4 rounded-full"
            onClick={saveAlias}
          >
            save
          </button>
        </div>
      </div>

      {/* download btn */}
      <div className="absolute flex items-center w-auto h-[10%] self-end m-3 px-2 bottom-0 bg-white border rounded-sm hover:bg-lightGrey">
        download
      </div>
    </div>
  );
};

export default BoxCard;
