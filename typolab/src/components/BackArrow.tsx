import React from "react";
import { BackIco } from "../../public/svgs";
import { useRouter } from "next/navigation";

type Props = {};

const BackArrow = (props: Props) => {
  const router = useRouter();
  return (
    <BackIco
      className="mobile:left-4 mobile:w-20 w-24 left-8 top-4 absolute"
      onClick={() => {
        router.back();
      }}
    />
  );
};

export default BackArrow;
