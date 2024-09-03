import { FontSet, FontSetArr } from "@/types/types";
import isFontSetInBox from "./isFontSetInBox";

export default function putFontSetToBox(
  fontSet: FontSet,
  setInBox: () => void
) {
  const currentBox = localStorage.getItem("box");
  if (currentBox && currentBox !== "null" && currentBox !== "undefined") {
    const addData: FontSetArr = JSON.parse(currentBox);
    if (isFontSetInBox(fontSet)) {
      console.log("already have same set");
    } else {
      addData.push(fontSet);
      localStorage.setItem("box", JSON.stringify(addData));
    }
  } else {
    localStorage.setItem("box", JSON.stringify([fontSet]));
  }
  setInBox();
}
