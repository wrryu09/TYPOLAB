import { FontInfoFromDB } from "@/types/types";
import axios from "axios";

const getGptGuide = async (
  koreanFontInfo: FontInfoFromDB,
  latinFontInfo: FontInfoFromDB
) => {
  const koreanFont = {
    name: koreanFontInfo.family,
    desc: koreanFontInfo.description,
  };
  const latinFont = {
    name: latinFontInfo.family,
    desc: latinFontInfo.description,
  };
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}gptguide`,
      {
        koreanFontInfo: koreanFont,
        latinFontInfo: latinFont,
      }
    );
    if (res) return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default getGptGuide;
