import React from "react";
import { HatIco } from "../../../public/svgs";
import { useRouter } from "next/navigation";

type Props = {
  executeScroll: () => void;
};

const MainBtns = (props: Props) => {
  const router = useRouter();
  return (
    <div className="mobile:gap-4 flex text-left justify-center w-10/12 mobile:flex-col text-darkGreen font-Bayon">
      {/* pair */}
      <div
        className="flex flex-col hover:text-red"
        onClick={() => {
          router.push("/pair");
        }}
      >
        <HatIco width={"100%"} />
        <p className="text-5xl">PAIR</p>
      </div>

      {/* search */}
      <div
        className="flex flex-col  hover:text-yellow"
        onClick={props.executeScroll}
      >
        <HatIco width={"100%"} />
        <p className="text-5xl">SEARCH</p>
      </div>

      {/* box */}
      <div
        className="flex flex-col  hover:text-blueblue"
        onClick={() => {
          router.push("/box");
        }}
      >
        <HatIco width={"100%"} />
        <p className="text-5xl">BOX</p>
      </div>
    </div>
  );
};

export default MainBtns;
