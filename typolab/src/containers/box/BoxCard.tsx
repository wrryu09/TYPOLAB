import React, { useState } from "react";
import { HatRightIco } from "../../../public/svgs";
import { FontSet } from "@/types/types";
import { getFontList } from "@/services/apis/googleFont.apis";

type Props = {
  fontSet: FontSet;
  removeItemFromBox(fontSet: FontSet): void;
  idx: number;
};

const BoxCard = (props: Props) => {
  const [isAliasSaved, setIsAliasSaved] = useState(false);
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
        if (
          item.family === props.fontSet.family &&
          item.size === props.fontSet.size &&
          item.weight === props.fontSet.weight
        ) {
          item.alias = fontAlias;
        }
      });
      if (fontAlias === "") {
        setIsAliasSaved(false);
      } else {
        setIsAliasSaved(true);
      }
      localStorage.setItem("box", JSON.stringify(boxItemList));
    }
  };

  const downloadFont = () => {
    getFontList("trending", props.fontSet.family)
      .then((res) => {
        if (res.data.items[0]) {
          let weight = props.fontSet.weight;
          if (weight === "400") {
            weight = "regular";
          }
          const downloadUrl = res.data.items[0].files[weight].replace(
            "http:",
            ""
          );
          const a = document.createElement("a");
          a.href = downloadUrl;
          a.click();
        } else {
          console.log("no file!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mobile:h-[12rem] mobile:w-full w-10/12 h-[20rem] flex flex-col justify-center relative bg-white rounded-lg shadow">
      <HatRightIco className="absolute w-[7%] right-0" />

      {/* remove btn */}
      <div
        className="mobile:text-xs hover:bg-red absolute font-medium w-[15%] h-[8%] top-0 self-end m-3 bg-lightGrey rounded-sm"
        onClick={() => {
          props.removeItemFromBox(props.fontSet);
        }}
      >
        remove
      </div>
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
      <div className="mobile:text-sm flex flex-col items-start pl-[5%]">
        <p>
          {props.fontSet.weight}, {props.fontSet.size}pt
        </p>
        <h1 className={`mobile:text-3xl text-4xl fontFamily${props.idx}`}>
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

          {/* save btn */}
          <button
            className={`mobile:py-1 mobile:px-3 ${
              isAliasSaved
                ? "bg-yellow text-darkGreen"
                : "bg-darkGreen text-white"
            } hover:bg-yellow hover:text-darkGreen py-2 px-4 rounded-full`}
            onClick={saveAlias}
          >
            {isAliasSaved ? "saved!" : "save"}
          </button>
        </div>
      </div>

      {/* download btn */}
      <div
        className="absolute flex items-center w-auto h-[10%] self-end m-3 px-2 bottom-0 bg-white border rounded-sm hover:bg-lightGrey"
        onClick={downloadFont}
      >
        download
      </div>
    </div>
  );
};

export default BoxCard;
