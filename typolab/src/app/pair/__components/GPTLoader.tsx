import { BounceLoader } from "react-spinners";

const GPTLoader = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`subTitleStyle mb-10`}>HOW TO USE</h1>
      <BounceLoader />
      <p className="mt-4">loading...</p>
      <p className="mt-4">가이드 생성 중입니다! 10초만 기다려 주세요</p>
    </div>
  );
};

export default GPTLoader;
