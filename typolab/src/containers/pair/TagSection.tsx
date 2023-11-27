import { Tag } from "@/types/types";
import React from "react";

type Props = {
  subTitleStyle: string;
  tagList: Tag[];
  handleTagSelection: (tagId: number) => void;
};

const TagSection = (props: Props) => {
  return (
    <div>
      <h1 className={props.subTitleStyle}>TAG</h1>
      <div className="flex flex-wrap gap-2 mb-40">
        {props.tagList.map((tag) => {
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
  );
};

export default TagSection;
