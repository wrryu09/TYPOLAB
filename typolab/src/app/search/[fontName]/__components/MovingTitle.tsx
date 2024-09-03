import SizedBox from "@/components/SizedBox";
import styles from "../page.module.css";
type MovingTitleProps = {
  fontFamily: string;
};

const MovingTitle = ({ fontFamily }: MovingTitleProps) => {
  return (
    <>
      <SizedBox height={5} />
      {/* title */}
      <div className={`w-11/12`}>
        <h1
          className={`fontFamily w-full text-[20vw] ${
            fontFamily.length > 8 ? styles.headLineTxt : null
          }  whitespace-nowrap font-[900]`}
        >
          {fontFamily}
        </h1>
      </div>
      <SizedBox height={9} />
    </>
  );
};

export default MovingTitle;
