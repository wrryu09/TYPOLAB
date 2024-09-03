import { FontSet } from "@/types/types";

const removeFontSetFromBox = (font: FontSet) => {
  const storedArr = localStorage.getItem("box");
  if (storedArr && storedArr !== "null" && storedArr !== "undefined") {
    const storedData = JSON.parse(storedArr);
    const modArr = storedData.filter((ele: FontSet) => {
      return (
        ele.family !== font.family ||
        ele.weight !== font.weight ||
        ele.size !== font.size
      );
    });
    localStorage.setItem("box", JSON.stringify(modArr));
  }
};

export default removeFontSetFromBox;
