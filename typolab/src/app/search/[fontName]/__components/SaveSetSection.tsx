import BoxSet from "@/containers/pair/BoxSet";

type SaveSetSectionProps = {
  fontSize: number;
  fontFamily: string;
  varient: string;
};

const SaveSetSection = ({
  fontSize,
  fontFamily,
  varient,
}: SaveSetSectionProps) => {
  return (
    <>
      <p className={`mobile:mt-[4rem] subTitleStyle mt-[10rem]`}>
        SAVE THIS FONT SET
      </p>
      <div className="flex pt-[1rem]">
        <BoxSet
          boxNum={2}
          displaySize={fontSize}
          font={{ name: fontFamily, variants: varient }}
        />
      </div>
    </>
  );
};

export default SaveSetSection;
