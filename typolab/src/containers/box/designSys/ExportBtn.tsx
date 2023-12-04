import React from "react";
import { HatIco } from "../../../../public/svgs";

type Props = {
  subTitleStyle: string;
  handleSave: (saveType: "png" | "jpg" | "svg") => void;
};

const ExportBtn = (props: Props) => {
  return (
    <div className="mobile:mb-[6rem] mb-[10rem]">
      <h1 className={props.subTitleStyle}>EXPORT AS...</h1>
      {/* main btn */}
      <div className="mobile:w-full flex text-left justify-center w-10/12 text-darkGreen font-Bayon">
        {/* PNG */}
        <div
          className="flex flex-col hover:text-yellow"
          onClick={() => {
            props.handleSave("png");
          }}
        >
          <HatIco width={"100%"} />
          <p className="mobile:text-3xl text-5xl">PNG</p>
        </div>

        {/* JPEG */}
        <div
          className="flex flex-col  hover:text-yellow"
          onClick={() => {
            props.handleSave("jpg");
          }}
        >
          <HatIco width={"100%"} />
          <p className="mobile:text-3xl text-5xl">JPEG</p>
        </div>

        {/* svg */}
        <div
          className="flex flex-col hover:text-yellow"
          onClick={() => {
            props.handleSave("svg");
          }}
        >
          <HatIco width={"100%"} />
          <p className="mobile:text-3xl text-5xl">SVG</p>
        </div>
      </div>
      {/* ~main btn */}
    </div>
  );
};

export default ExportBtn;
