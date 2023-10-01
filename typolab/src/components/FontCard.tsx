import React from "react";
import { HatIco, PlusIco } from "../../public/svgs";
import FullLine from "./FullLine";
import SizedBox from "./SizedBox";
import { useRouter } from "next/navigation";

type Props = {};

const FontCard = (props: Props) => {
  const router = useRouter();
  interface FontInfo {
    family: string;
    category: string;
    kind: string;
    link: string;
  }
  const fontInfo: FontInfo = {
    family: "FontName",
    category: "sans-serif",
    kind: "webfonts#webfont",
    link: "https://fonts.google.com/specimen/",
  };
  return (
    <div className="w-56 h-80 shrink-0 relative bg-white rounded-xl flex-col justify-start items-center inline-flex">
      <HatIco className="rotate-180 w-5/12 fill-darkGreen" />
      <p className="self-start mt-2 mb-1 ml-4">{fontInfo.family}</p>
      <FullLine color="black" />
      <SizedBox height={10} />
      <div className="self-start ml-4">
        <h1>{fontInfo.family}</h1>
        <p>{fontInfo.category}</p>
        <p>{fontInfo.kind}</p>
      </div>
      <PlusIco
        className="w-2/12 absolute bottom-2 right-2"
        onClick={() => {
          // put to my box
        }}
      />
    </div>
  );
};

export default FontCard;
