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
    <div className="w-full">
      <div className="pl-8">
        <Wrapper type="col">
          <div
            className="flex"
            onClick={() => {
              router.push("/about");
            }}
          >
            <Image
              alt="about"
              src={AboutTextIco}
              className="mobile:w-20 tablet:w-32"
            />
            <SizedBox width={1} />
            <Image
              alt="arrow"
              src={RightArrowIco}
              className="mobile:w-12 tablet:w-24"
            />
          </div>
          <SizedBox height={1} />
          <Image
            alt="typolab"
            src={TypoLabIco}
            className="mobile:w-48 tablet:w-64"
          />
        </Wrapper>
      </div>
      <SizedBox height={1} />
      <FullLine color="darkGreen" />
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
