import React from "react";
import { RightArrowIco } from "../../../public/svgs";
import { useRouter } from "next/navigation";

type Props = {
  subTitleStyle: string;
};

const TotheBox = (props: Props) => {
  const router = useRouter();
  return (
    <div
      className="w-full flex items-center gap-2 mobile:mb-20 mb-60 justify-end"
      onClick={() => router.push("/box")}
    >
      <p className={`${props.subTitleStyle} text-xl pb-0 whitespace-nowrap`}>
        BOX Page
      </p>
      <RightArrowIco className="w-1/12" />
    </div>
  );
};

export default TotheBox;
