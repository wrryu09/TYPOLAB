import axios from "axios";

export function getKoreanFontInfoDB(fontName: string) {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}fonts/korean/${fontName}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
