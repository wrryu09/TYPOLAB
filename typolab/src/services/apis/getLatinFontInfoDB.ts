import axios from "axios";

export function getLatinsFontInfoDB(fontName: string) {
  return axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}fonts/latin/${fontName}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
