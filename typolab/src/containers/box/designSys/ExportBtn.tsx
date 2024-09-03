import { RefObject } from "react";
import { HatIco } from "../../../../public/svgs";
import saveDesignSys from "@/services/saveDesignSys";

type ExportBtnProps = {
  designSysRef: RefObject<HTMLDivElement>;
};

const ExportBtn = ({ designSysRef }: ExportBtnProps) => {
  const exportBtns: {
    name: string;
    saveType: "png" | "jpg" | "svg";
  }[] = [
    { name: "PNG", saveType: "png" },
    { name: "JPEG", saveType: "jpg" },
    { name: "SVG", saveType: "svg" },
  ];
  return (
    <div className="mobile:mb-[6rem] mb-[10rem]">
      <h1 className={"subTitleStyle"}>EXPORT AS...</h1>
      <div className="mobile:w-full flex text-left justify-center w-10/12 text-darkGreen font-Bayon">
        {exportBtns.map(({ name, saveType }) => {
          return (
            <div
              key={name}
              className="flex flex-col hover:text-yellow"
              onClick={() => {
                saveDesignSys({ saveType: saveType, designSysRef });
              }}
            >
              <HatIco width={"100%"} />
              <p className="mobile:text-3xl text-5xl">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExportBtn;
