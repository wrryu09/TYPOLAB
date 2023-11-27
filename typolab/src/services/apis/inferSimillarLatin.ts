import { FontNameVarSet, InferredFont } from "@/types/types";
import axios from "axios";

export function inferSimillarLatin(font: FontNameVarSet) {
  if (font.variants === "regular") {
    font.variants = "400";
  }
  return axios
    .get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}infer/simillarLatin/${font.name}_${font.variants}`
    )
    .then((res) => {
      const resArr: InferredFont[] = [];
      res.data.data.matches.map(
        (ele: {
          id: string;
          score: number;
          values: [];
          metadata: {
            lang: "kor" | "eng";
          };
        }) => {
          const fontData = {
            fontName: ele.id.split("_")[0],
            fontVar: ele.id.split("_")[1],
            fontScore: ele.score,
          };
          resArr.push(fontData);
        }
      );
      return resArr;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
