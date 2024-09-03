import { Tag } from "@/types/types";

type GuideTagProps = {
  tagList: {
    classTag: Tag[];
    useTag: Tag[];
  };
};

const GuideTag = ({ tagList }: GuideTagProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {/* 해당되는 태그만 보이기 */}
      {tagList.classTag.map((tag) => {
        return (
          <div key={tag.id + tag.name + "selected"}>
            {tag.selected && (
              <p
                className={`mobile:text-sm px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
        bg-fog
      `}
              >
                {tag.name}
              </p>
            )}
          </div>
        );
      })}
      {tagList.useTag.map((tag) => {
        return (
          <div key={tag.id + tag.name + "selected"}>
            {tag.selected && (
              <p
                className={`mobile:text-sm px-3 py-1 border border-lightGrey rounded-md flex shrink-0 justify-center
        bg-fog
      `}
              >
                {tag.name}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GuideTag;
