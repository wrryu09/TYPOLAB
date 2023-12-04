import { FontInfoFromDB } from "@/types/types";
import axios from "axios";

export function getGptGuide(
  koreanFontInfo: FontInfoFromDB,
  latinFontInfo: FontInfoFromDB
) {
  const koreanFont = {
    name: koreanFontInfo.family,
    desc: koreanFontInfo.description,
  };
  const latinFont = {
    name: latinFontInfo.family,
    desc: latinFontInfo.description,
  };
  return axios
    .post(`${process.env.NEXT_PUBLIC_SERVER_URL}gptguide`, {
      koreanFontInfo: koreanFont,
      latinFontInfo: latinFont,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
