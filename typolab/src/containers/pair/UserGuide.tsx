import GPTLoader from "@/app/pair/__components/GPTLoader";
import GuideBtn from "@/app/pair/__components/GuideBtn";
import GuideTag from "@/app/pair/__components/GuideTag";
import { FontInfoFromDB, FontNameVarSet, Tag } from "@/types/types";
import { lazy, Suspense, useState } from "react";
type UserGuideProps = {
  koreanFont: FontNameVarSet;
  latinFont: FontNameVarSet;
  selectedFirstInfo: FontInfoFromDB;
  selectedScndInfo: FontInfoFromDB;
  tagList: {
    classTag: Tag[];
    useTag: Tag[];
  };
};

const UserGuideContent = lazy(
  () => import("@/app/pair/__components/UserGuideContent")
);
const UserGuide = ({
  koreanFont,
  latinFont,
  selectedFirstInfo,
  selectedScndInfo,
  tagList,
}: UserGuideProps) => {
  const [showGuideBtn, setShowGuideBtn] = useState(true);
  const handleGuideBtn = () => {
    setShowGuideBtn(false);
  };

  return (
    <div className="mobile:mt-10 mobile:mb-0 mt-40 mb-40">
      {koreanFont.name !== "none" && latinFont.name !== "none" && (
        <>
          {showGuideBtn ? (
            <GuideBtn onClick={handleGuideBtn} />
          ) : (
            <Suspense fallback={<GPTLoader />}>
              <h1 className={"subTitleStyle"}>HOW TO USE</h1>
              <GuideTag tagList={tagList} />
              <UserGuideContent
                selectedFirstInfo={selectedFirstInfo}
                selectedScndInfo={selectedScndInfo}
              />
            </Suspense>
          )}
        </>
      )}
    </div>
  );
};

export default UserGuide;
