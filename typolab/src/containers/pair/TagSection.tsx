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
      <div className="mb-20 flex flex-col items-start">
        {/* classification */}
        <p className="font-semibold py-4">분류</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {props.tagList.classTag.map((tag) => {
            return (
              <h1
                key={tag.id + tag.name}
                className={`px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center hover:bg-red ${
                  tag.selected ? "bg-red font-semibold" : "bg-fog"
                }`}
                onClick={() => {
                  props.handleTagSelection(tag.id);
                }}
              >
                {tag.name}
              </h1>
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
              <h1
                key={tag.id + tag.name}
                className={`px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center hover:bg-red ${
                  tag.selected ? "bg-red font-semibold" : "bg-fog"
                }`}
                onClick={() => {
                  props.handleTagSelection(tag.id);
                }}
              >
                {tag.name}
              </h1>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TagSection;
