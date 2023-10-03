import React from "react";
import { HatIco, PlusIco } from "../../public/svgs";
import FullLine from "./FullLine";
import SizedBox from "./SizedBox";
import { useRouter } from "next/navigation";
import styles from "./fontCard.module.css";

type Props = {
  idx: number;
  data: any;
};
type BackFaceCol = {
  col: string;
  bg: string;
}[];

const FontCard = (props: Props) => {
  const router = useRouter();
  const backFaceCol: BackFaceCol = [
    {
      col: "red",
      bg: "yellow",
    },
    {
      col: "darkGreen",
      bg: "red",
    },
    {
      col: "yellow",
      bg: "blueblue",
    },
    {
      col: "black",
      bg: "greenGrey",
    },
  ];
  interface FontInfo {
    family: string;
    category: string;
    kind: string;
    link: string;
  }
  interface ColorSetting {
    bg: string;
    txtCol: string;
  }
  const exFontData: FontInfo = {
    family: "FontName",
    category: "sans-serif",
    kind: "webfonts#webfont",
    link: "https://fonts.google.com/specimen/",
  };

  const index = props.idx % backFaceCol.length;
  const colorSetting: ColorSetting = {
    bg: `bg-${backFaceCol[index].bg}`,
    txtCol: `text-${backFaceCol[index].col}`,
  };

  let fontData: FontInfo = props.data;
  // if failed to get font data, print example font data
  if (fontData.family == undefined) {
    fontData = exFontData;
  }

  function handlePlus() {
    console.log("you pressed plus button!");
  }

  return (
    <div className={styles.flipCard}>
      <div className="w-56 h-80 shrink-0 relative rounded-xl flex-col justify-start items-center inline-flex">
        <div className={styles.flipCardInner}>
          {/* front side */}
          <div className={`${styles.flipCardFront} text-darkGreen`}>
            <div className="flex flex-col">
              <HatIco className="rotate-180 w-5/12 self-center" />
              <p className="self-start mt-2 mb-1 ml-4">{fontData.family}</p>
              <FullLine color="black" />
            </div>
            <div className="self-start ml-4">
              <h1 className={`text-5xl font-bold`}>{fontData.family}</h1>
              <SizedBox height={0.4} />
              <p>{fontData.category}</p>
              <p>{fontData.kind}</p>
              <SizedBox height={1.5} />
            </div>
            <PlusIco
              className="w-2/12 absolute bottom-2 right-2"
              onClick={() => {
                // put to my box
                handlePlus();
              }}
            />
          </div>

          {/* back side */}
          <div
            className={`${styles.flipCardBack} ${colorSetting.bg} ${colorSetting.txtCol}`}
          >
            <HatIco className={`rotate-180 w-5/12 self-center`} />
            <div
              onClick={() => {
                console.log("console");
              }}
            >
              <div
                className={`w-[96%] h-[97%] border border-solid rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute`}
              />
              <p className=" mt-2 mb-1 ml-4">{fontData.family}</p>
              <div className="h-2/6"></div>
              <h1 className="w-10/12 h-auto ml-4 mr-4 overflow-clip text-8xl font-extrabold">
                TYPOLAB
              </h1>
              <p className="mt-2 mb-1 ml-4 absolute bottom-2 font-Bayon text-xl">
                SEE MORE
              </p>
            </div>
            <PlusIco
              className={`w-2/12 absolute bottom-2 right-2`}
              onClick={() => {
                // put to my box
                handlePlus();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontCard;
