"use client";

import React, { useEffect, useRef, useState } from "react";
import { HatIco, LogoHatIco } from "../../../../public/svgs";
import BackArrow from "@/components/BackArrow";
import { FontSet } from "@/types/types";
import { toPng, toJpeg, toSvg } from "html-to-image";
import CodeCss from "@/containers/box/designSys/CodeCss";
import ExportBtn from "../../../containers/box/designSys/ExportBtn";
import DesignSysBox from "@/containers/box/designSys/DesignSysBox";

const DesignSys = () => {
  const designSysRef = useRef<HTMLDivElement>(null);
  const subTitleStyle = "mobile:text-4xl mobile:pb-4 font-Bayon text-6xl pb-8";
  const [boxContent, setBoxContent] = useState<FontSet[]>([]);
  useEffect(() => {
    const boxItems = localStorage.getItem("box");
    if (boxItems) {
      const boxItemsObj = JSON.parse(boxItems);
      setBoxContent(boxItemsObj);
    }
  }, []);

  const handleSave = (saveType: "png" | "jpg" | "svg") => {
    if (designSysRef.current === null) {
      return;
    }
    if (saveType === "png") {
      toPng(designSysRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "typolab-designsystem.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (saveType === "jpg") {
      toJpeg(designSysRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "typolab-designsystem.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toSvg(designSysRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "typolab-designsystem.svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-blueblue h-full text-darkGreen flex flex-col items-center">
      <BackArrow />
      <HatIco width={"25%"} className="rotate-180 self-center top-0 absolute" />
      <div className="mobile:mt-[6rem] w-10/12 mt-[10rem]">
        <DesignSysBox
          boxContent={boxContent}
          designSysRef={designSysRef}
          subTitleStyle={subTitleStyle}
        />

        {/* export as */}
        <ExportBtn handleSave={handleSave} subTitleStyle={subTitleStyle} />

        {/* copy css */}
        <CodeCss boxContent={boxContent} subTitleStyle={subTitleStyle} />

        <LogoHatIco className="w-full" />
      </div>
    </div>
  );
};

export default DesignSys;
