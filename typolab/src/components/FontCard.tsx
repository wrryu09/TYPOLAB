import React from "react";
import { HatIco, PlusIco } from "../../public/svgs";
import FullLine from "./FullLine";
import SizedBox from "./SizedBox";
import { useRouter } from "next/navigation";
import styles from "./fontCard.module.css";

type Props = {
  idx: number;
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
  const fontInfo: FontInfo = {
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

  function handlePlus() {
    console.log("you pressed plus button!");
  }

  return (
    <div className={styles.flipCard}>
      <div className="w-56 h-80 shrink-0 relative rounded-xl flex-col justify-start items-center inline-flex">
        <div className={styles.flipCardInner}>
          {/* front side */}
          <div className={`${styles.flipCardFront}  text-darkGreen`}>
            <HatIco className="rotate-180 w-5/12 self-center" />
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
              <p className=" mt-2 mb-1 ml-4">{fontInfo.family}</p>
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
