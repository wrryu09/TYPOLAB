import React from "react";
import { HatIco } from "../../../public/svgs";

type Props = {};

const BoxCard = (props: Props) => {
  return (
    <div className="w-10/12 h-[20rem] flex flex-col justify-center relative bg-white rounded-lg shadow ">
      <HatIco className="absolute rotate-270 w-1/5 right-0" />

      {/* remove btn */}
      <div className="absolute w-[15%] h-[8%] top-0 self-end m-3 bg-lightGrey rounded-sm" />

      {/* text section */}
      <div className="flex flex-col items-start pl-[5%]">
        <p>Regular, 24pt</p>
        <h1 className="text-4xl font-extrabold">Black Ops One</h1>

        {/* alias input */}
        <div className="flex mt-3 gap-x-3">
          <input
            type="text"
            className="bg-fog rounded-tl-lg rounded-tr-[50px] rounded-bl-lg rounded-br-[50px]"
            placeholder="Font alias here"
          />
          <button className="bg-yellow py-2 px-4 rounded-full">save</button>
        </div>
      </div>

      {/* download btn */}
      <div className="absolute flex items-center w-auto h-[10%] self-end m-3 px-2 bottom-0 bg-white border rounded-sm hover:bg-lightGrey">
        download
      </div>
    </div>
  );
};

export default BoxCard;