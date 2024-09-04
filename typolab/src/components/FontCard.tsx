import { HatIco, PlusIco } from "../../public/svgs";
import FullLine from "./FullLine";
import { useRouter } from "next/navigation";
import styles from "./fontCard.module.css";
import { FontInfo } from "@/types/types";

type FontCardProps = {
  idx: number;
  data: FontInfo;
};

const FontCard = ({ idx, data }: FontCardProps) => {
  const router = useRouter();
  const backFaceCodeCol = [
    `${styles.flipCardBack} bg-yellow text-red overflow-hidden`,
    `${styles.flipCardBack} bg-red text-darkGreen overflow-hidden`,
    `${styles.flipCardBack} bg-blueblue text-yellow overflow-hidden`,
    `${styles.flipCardBack} bg-greenGrey text-black overflow-hidden`,
  ];
  const exFontData: FontInfo = {
    family: "FontName",
    category: "sans-serif",
    kind: "webfonts#webfont",
    menu: "menulink",
    link: "https://fonts.google.com/specimen/",
  };

  const index = idx % backFaceCodeCol.length;

  let fontData: FontInfo = data;
  // if failed to get font data, print example font data
  if (fontData.family == undefined) {
    fontData = exFontData;
  }

  const moveToInfoPage = () => {
    router.push(`search/${fontData.family}`);
  };

  return (
    <div className={styles.flipCard}>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${fontData.family}`}
      />
      <style>
        {`.fontFamily${idx}{
    font-family: ${fontData.family};
    font-weight: 900;
  }
  }`}
      </style>
      <div
        className="mobile:w-32 mobile:h-[12rem] w-56 h-80 shrink-0 relative rounded-xl flex-col justify-start items-center inline-flex"
        onClick={moveToInfoPage}
      >
        <div className={styles.flipCardInner}>
          {/* front side */}
          <div className={`${styles.flipCardFront} text-darkGreen`}>
            <div className="flex flex-col">
              <HatIco className="rotate-180 w-5/12 self-center" />
              <p className="mobile:text-[0.5rem] self-start mt-2 mb-1 ml-4">
                {fontData.family}
              </p>
              <FullLine color="black" />
            </div>
            <div className="self-start ml-4">
              <h1 className={`mobile:text-lg text-5xl fontFamily${idx}`}>
                {fontData.family}
              </h1>
              <p className="mobile:text-[0.5rem] pt-[0.4rem]">
                {fontData.category}
              </p>
              <p className="mobile:text-[0.5rem] mb-[1.5rem]">
                {fontData.kind}
              </p>
            </div>
            <PlusIco className="w-2/12 absolute bottom-2 right-2" />
          </div>

          {/* back side */}
          <div className={`${backFaceCodeCol[index]}`}>
            <HatIco className={`rotate-180 w-5/12 self-center`} />
            <div>
              <div
                className={`w-[96%] h-[97%] border border-solid rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute`}
              />
              <p className={`mt-2 mb-1 ml-4`}>{fontData.family}</p>
              <div className="h-2/6"></div>
              <h1
                className={`mobile:text-6xl w-10/12 ml-4 mr-4 text-8xl fontFamily${idx} ${styles.backTxt}`}
              >
                {fontData.family}
              </h1>
              <p className="mt-2 mb-1 ml-4 absolute bottom-2 font-Bayon text-xl">
                SEE MORE
              </p>
            </div>
            <PlusIco className={`w-2/12 absolute bottom-2 right-2`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontCard;
