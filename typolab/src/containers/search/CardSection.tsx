import FontCard from "@/components/FontCard";
import { FontInfo } from "@/types/types";
type CardSectionProps = {
  fontList: FontInfo[];
};

const CardSection = ({ fontList }: CardSectionProps) => {
  return (
    <div className="mobile:mt-[4rem] w-full mt-[10rem] ml-8 mr-8 flex flex-wrap justify-center gap-y-6 gap-3 items-center">
      {fontList.map((data, idx) => {
        return <FontCard key={"fontCard" + idx} idx={idx} data={data} />;
      })}
    </div>
  );
};

export default CardSection;
