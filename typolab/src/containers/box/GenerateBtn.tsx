"use client";
import { useRouter } from "next/navigation";

const GenerateBtn = () => {
  const router = useRouter();
  return (
    <button
      className="hover:bg-yellow hover:text-darkGreen hover:font-bold flex h-auto px-8 py-4 bg-darkGreen text-white font-semibold rounded-full justify-center items-center"
      onClick={() => {
        router.push("/box/designSys");
      }}
    >
      GENERATE
    </button>
  );
};

export default GenerateBtn;
