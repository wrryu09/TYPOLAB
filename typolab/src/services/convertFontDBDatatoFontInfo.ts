import { FontInfo, FontInfoFromDB } from "@/types/types";

// FontInfoFromDB 타입 데이터를 FontInfo타입으로 가공
export const convertFontDBDatatoFontInfo = (data: FontInfoFromDB) => {
  const convertedData: FontInfo = {
    category: data.category,
    family: data.family,
    kind: data.kind,
    link: "none",
    menu: data.menu,
  };
  return convertedData;
};
