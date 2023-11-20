import { FontNameNVar } from "@/types/types";
import axios from "axios";

export function inferSimillarLatin(font: FontNameNVar) {
  return axios
    .get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}infer/simillarLatin/${font.name}_${font.variants}`
    )
    .then((res) => {
      return res.data.data.matches;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
