"use client";

import { useEffect, useRef, useState } from "react";
import { HatIco, LogoHatIco } from "../../../../public/svgs";
import BackArrow from "@/components/BackArrow";
import { FontSet } from "@/types/types";
import CodeCss from "@/containers/box/designSys/CodeCss";
import ExportBtn from "../../../containers/box/designSys/ExportBtn";
import DesignSysBox from "@/containers/box/designSys/DesignSysBox";

const DesignSys = () => {
  const designSysRef = useRef<HTMLDivElement>(null);
  const [boxContent, setBoxContent] = useState<FontSet[]>([]);

  /** localstorage 에서 저장한 폰트 불러와 그려주기 */
  const bringFontsFromLocalStorage = () => {
    const boxItems = localStorage.getItem("box");
    if (boxItems) {
      const boxItemsObj = JSON.parse(boxItems);
      setBoxContent(boxItemsObj);
    }
  };

  useEffect(() => {
    bringFontsFromLocalStorage();
  }, []);

  return (
    <div className="bg-blueblue h-full text-darkGreen flex flex-col items-center">
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <div className="mobile:mt-[6rem] w-10/12 mt-[10rem]">
        <DesignSysBox boxContent={boxContent} designSysRef={designSysRef} />

        {/* export as */}
        <ExportBtn designSysRef={designSysRef} />

        {/* copy css */}
        <CodeCss boxContent={boxContent} />

        <LogoHatIco className="w-full" />
      </div>
    </div>
  );
};

export default DesignSys;
