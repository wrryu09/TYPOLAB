import { Tag } from "@/types/types";
import axios from "axios";
import qs from "querystring";

export function getKoreanFontList(tagList: { classTag: Tag[]; useTag: Tag[] }) {
  let classification = "none";
  const usage: string[] = [];
  tagList.classTag.map((c) => {
    if (c.selected === true) {
      classification = c.name;
    }
  });
  tagList.useTag.map((u) => {
    if (u.selected === true) {
      usage.push(u.name);
    }
  });
  console.log(classification, ", usage: ", usage);
  return axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}fonts/korean`, {
      params: {
        classifi: classification,
        usage: usage,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
