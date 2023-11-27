import Wrapper from "@/components/Wrapper";
import React from "react";

type Props = {};

const LineTxt = () => {
  return (
    <div className="w-full flex text-center items-center pt-[20rem] pb-[10rem]">
      <div className="w-full h-px bg-greenGrey ml-6"></div>
      <div className="flex-shrink-0 pr-5 pl-5 font-NotoSans">
        <Wrapper type="col">
          <p className="font-NotoSans">font recommendation</p>
          <p>based on your tag selection</p>
        </Wrapper>
      </div>
      <div className="w-full h-px bg-greenGrey mr-6"></div>
    </div>
  );
};

export default LineTxt;
