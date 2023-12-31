import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import SizedBox from "./SizedBox";
import { AboutTextIco, RightArrowIco, TypoLabIco } from "../../public/svgs";
import FullLine from "./FullLine";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full mb-20 flex flex-col justify-center items-start">
      <div className="pl-8 mobile:pl-4">
        <Wrapper type="col">
          <div
            className="flex items-center"
            onClick={() => {
              router.push("/about");
            }}
          >
            <AboutTextIco className="w-1/6 mobile:w-20 tablet:w-32" />
            <SizedBox width={1} />
            <RightArrowIco className="w-1/12 mobile:w-12 tablet:w-24" />
          </div>
          <SizedBox height={1} />
          <TypoLabIco width={"30%"} className="mobile:w-48 tablet:w-64" />
        </Wrapper>
      </div>
      <SizedBox height={1} />
      <div className="w-full flex justify-center">
        <FullLine color="darkGreen" />
      </div>
      <SizedBox height={1} />
      <div className="pl-8">
        <Wrapper type="col">
          <p>이화여자대학교 도전학기제 16기</p>
          <p>rryu09@ewhain.net</p>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
