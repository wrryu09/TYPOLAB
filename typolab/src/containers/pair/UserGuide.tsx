import { getGptGuide } from "@/services/apis/getGptGuide";
import { FontInfoFromDB, FontNameVarSet, Tag } from "@/types/types";
import React, { useState } from "react";
import { BounceLoader } from "react-spinners";

type Props = {
  koreanFont: FontNameVarSet;
  latinFont: FontNameVarSet;
  selectedFirstInfo: FontInfoFromDB;
  selectedScndInfo: FontInfoFromDB;
  subTitleStyle: string;
  tagList: {
    classTag: Tag[];
    useTag: Tag[];
  };
};

const UserGuide = (props: Props) => {
  const [useGuide, setUseGuide] = useState("guide generating...");
  const [isGuideBtnPushed, setIsGuideBtnPushed] = useState(false);
  // view guide section
  const [showGuide, setShowGuide] = useState(false);
  return (
    <div className="mobile:mt-10 mobile:mb-0 mt-40 mb-40">
      {/* view guide */}
      {props.koreanFont.name !== "none" && props.latinFont.name !== "none" ? (
        <div>
          {!showGuide ? (
            <div className="mobile:mb-0 mt-20">
              {!isGuideBtnPushed ? (
                <div
                  className="px-12 py-4 bg-darkGreen hover:bg-red rounded-full justify-center items-center inline-flex"
                  onClick={() => {
                    setIsGuideBtnPushed(true);
                    getGptGuide(props.selectedFirstInfo, props.selectedScndInfo)
                      .then((res) => {
                        setUseGuide(res.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                      .finally(() => {
                        setShowGuide(true);
                      });
                  }}
                >
                  <p className="mobile:text-4xl text-center text-white text-7xl font-['Bayon']">
                    view guide
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <h1 className={`${props.subTitleStyle} mb-10`}>HOW TO USE</h1>
                  <BounceLoader />
                  <p className="mt-4">loading...</p>
                  <p className="mt-4">
                    가이드 생성 중입니다! 30초만 기다려 주세요
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className={props.subTitleStyle}>HOW TO USE</h1>
              <div className="flex flex-wrap gap-2 mb-10">
                {/* 해당되는 태그만 보이기 */}
                {props.tagList.classTag.map((tag) => {
                  return (
                    <div key={tag.id + tag.name + "selected"}>
                      {tag.selected === true ? (
                        <h1
                          className={`mobile:text-sm px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
        bg-fog
      `}
                        >
                          {tag.name}
                        </h1>
                      ) : null}
                    </div>
                  );
                })}
                {props.tagList.useTag.map((tag) => {
                  return (
                    <div key={tag.id + tag.name + "selected"}>
                      {tag.selected === true ? (
                        <h1
                          className={`mobile:text-sm px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
        bg-fog
      `}
                        >
                          {tag.name}
                        </h1>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <p>{useGuide}</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default UserGuide;
