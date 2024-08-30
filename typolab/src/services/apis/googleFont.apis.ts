import { FontPageType } from "@/types/types";
import axios, { isAxiosError } from "axios";

export async function getFontList(sort?: string, family?: string) {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts`,
      {
        params: {
          sort: sort,
          family: family,
          key: process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY,
        },
      }
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("Error from getFontList: axiosError", error);
    } else {
      console.error("Error from getFontList", error);
    }
  }
}

export async function getFontPage(family: string) {
  try {
    const result = (
      await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}search/fontPageInfo/${family}`
      )
    ).data.data;
    const fontPageData: FontPageType = {
      family: result.family,
      coverage: result.coverage,
      fonts: {},
      description: result.description,
      license: result.license,
      designers: result.designers,
      category: result.category,
      stroke: result.stroke,
      classifications: result.classifications,
      size: result.size,
      languages: result.languages,
    };
    return fontPageData;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("Error from getFontList: axiosError", error);
    } else {
      console.error("Error from getFontList", error);
    }
  }
}
