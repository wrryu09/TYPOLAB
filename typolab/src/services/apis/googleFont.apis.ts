import { FontPageType } from "@/types/types";
import axios from "axios";

export function getFontList(sort?: string, family?: string) {
  return axios
    .get(`https://www.googleapis.com/webfonts/v1/webfonts`, {
      params: {
        sort: sort,
        family: family,
        key: process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export function getFontPage(family: string) {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}search/fontPageInfo/${family}`)
    .then((res) => {
      const result = res.data.data;
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
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
