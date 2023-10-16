import { FontSet, FontSetArr } from "@/types/types";

export default function putFontSetToBox(fontSet: FontSet) {
  const currentBox = localStorage.getItem("box");
  if (currentBox && currentBox !== "null" && currentBox !== "undefined") {
    const addData: FontSetArr = JSON.parse(currentBox);
    if (
      addData.find((ele) => {
        if (
          ele.family === fontSet.family &&
          ele.weight === fontSet.weight &&
          ele.size === fontSet.size
        ) {
          return true;
        }
      })
    ) {
      console.log("already have same set");
    } else {
      addData.push(fontSet);
      localStorage.setItem("box", JSON.stringify(addData));
    }
  } else {
    localStorage.setItem("box", JSON.stringify([fontSet]));
  }
  console.log("boxSet :", localStorage.getItem("box"));
}
