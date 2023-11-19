import axios from "axios";

export function getKoreanFontList() {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}fonts/korean`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
