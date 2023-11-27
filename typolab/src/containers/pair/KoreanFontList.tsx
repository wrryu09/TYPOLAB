import React from "react";

type Props = {};

const KoreanFontList = (props: Props) => {
  return (
    <div className="absolute flex flex-col z-10 w-full h-full top-0 left-0 items-center justify-center bg-black bg-opacity-80">
      <h2 className="font-Bayon text-6xl pb-8 text-white">Choose your font</h2>
      <div className="w-[90%] p-8 rounded-lg border border-greenGrey bg-fog flex justify-between text-darkGreen">
        <div className="flex w-full justify-between">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
            <div className="">Font Family</div>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="">Variants</div>
            <div className="">regular</div>
            <div className="">bold</div>
            <div className="">semibold</div>
            <div className="">extrabold</div>
            <div className="">black</div>
          </div>
          <div className="flex-col items-end justify-between inline-flex">
            <div className="flex-col justify-end items-end flex text-right">
              <div className="text-6xl font-['Black Ops One']">안녕하세요</div>
              <div className="text-6xl font-['Black Ops One']">
                Black Ops One
              </div>
            </div>
            <div className="px-12 py-2 bg-darkGreen rounded-full justify-center items-center inline-flex">
              <div className="text-center text-white text-7xl font-['Bayon']">
                ok
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanFontList;
