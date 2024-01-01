import { Tag } from "@/types/types";
import React from "react";

type Props = {
  subTitleStyle: string;
  tagList: { classTag: Tag[]; useTag: Tag[] };
  handleTagSelection: (tagId: number) => void;
};

const TagSection = (props: Props) => {
  return (
    <>
      <h1 className={props.subTitleStyle}>TAG</h1>
      {/* 국문 폰트가 설정 안 되어 있으면 태그를 선택하라는 안내 띄우기 */}
      <div className="break-keep text-sm mb-10">
        <p>태그를 고르고 한글 폰트를 선택해보세요!</p>
        <p>선택하지 않으면 모든 글꼴이 표시됩니다.</p>
      </div>
      <div className="mb-20 flex flex-col items-start">
        {/* classification */}
        <p className="mobile:py-2 font-semibold py-4">분류</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {props.tagList.classTag.map((tag) => {
            return (
              <TagBtn
                key={"class" + tag.id + tag.name + tag.selected}
                tagInfo={tag}
                handleTagSelection={props.handleTagSelection}
              />
            );
          })}
        </div>

        {/* Variants */}
        <p className="font-semibold py-4">Variants</p>
        <input type="range" min={1} max={12} className="w-full mb-4" />

        {/* Usage */}
        <p className="font-semibold py-4">Usage (choose all)</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {props.tagList.useTag.map((tag) => {
            return (
              <TagBtn
                key={"usuageTag" + tag.id + tag.name + tag.selected}
                tagInfo={tag}
                handleTagSelection={props.handleTagSelection}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

interface TagBtnProps {
  tagInfo: Tag;
  handleTagSelection: (tagId: number) => void;
}
const TagBtn = (props: TagBtnProps) => {
  return (
    <h1
      className={`mobile:text-sm px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center hover:bg-red ${
        props.tagInfo.selected ? "bg-red font-semibold" : "bg-fog"
      }`}
      onClick={() => {
        props.handleTagSelection(props.tagInfo.id);
      }}
    >
      {props.tagInfo.name}
    </h1>
  );
};

export default TagSection;
