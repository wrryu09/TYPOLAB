import { FontSet, FontSetArr } from "@/types/types";

/** localStorage에 현재 찾는 폰트가 있는지 boolean 값으로 반환 */
const isFontSetInBox = (fontSet: FontSet) => {
  const currentBox = localStorage.getItem("box");
  if (currentBox && currentBox !== "null" && currentBox !== "undefined") {
    const addData: FontSetArr = JSON.parse(currentBox);
    const res = addData.find(
      ({ family, weight, size }) =>
        family === fontSet.family &&
        weight == fontSet.weight &&
        size == fontSet.size
    );
    if (res) return true;
    else return false;
  }
};
export default isFontSetInBox;
