import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  visible: boolean;
  min: number;
  max: number;
};

const FontSetting = (props: Props) => {
  const router = useRouter();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val: number = Number(e.currentTarget.value);
    props.setSize(val);
  }

  return (
    <div
      className={`flex font-Bayon gap-x-2 ${
        props.visible ? "block" : "hidden"
      }`}
    >
      <p>FONTFAMILY</p>
      <p>SIZE</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        onChange={handleInputChange}
      />
      {props.size}PT
      <button
        className="bg-greenGrey text-white px-2 py-0.5 rounded-md shrink-0"
        onClick={() => {
          router.push("/pair/changeFont");
        }}
      >
        CHANGE FONT
      </button>
    </div>
  );
};

export default FontSetting;
