import { toPng, toJpeg, toSvg } from "html-to-image";
import { RefObject } from "react";
interface SaveDesignSysType {
  saveType: "png" | "jpg" | "svg";
  designSysRef: RefObject<HTMLElement>;
}
const saveDesignSys = async ({ saveType, designSysRef }: SaveDesignSysType) => {
  if (designSysRef.current === null) {
    return;
  }
  if (saveType === "png") {
    const res = await toPng(designSysRef.current, { cacheBust: true });
    if (res) {
      const link = document.createElement("a");
      link.download = "typolab-designsystem.png";
      link.href = res;
      link.click();
    }
  } else if (saveType === "jpg") {
    const res = await toJpeg(designSysRef.current, { cacheBust: true });
    if (res) {
      const link = document.createElement("a");
      link.download = "typolab-designsystem.jpeg";
      link.href = res;
      link.click();
    }
  } else {
    const res = await toSvg(designSysRef.current, { cacheBust: true });
    if (res) {
      const link = document.createElement("a");
      link.download = "typolab-designsystem.svg";
      link.href = res;
      link.click();
    }
  }
};

export default saveDesignSys;
