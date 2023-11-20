"use client";

import React, { useEffect, useState } from "react";
import SizedBox from "@/components/SizedBox";
import BackArrow from "@/components/BackArrow";
import Footer from "@/components/Footer";
import { HatIco, PlusIco } from "../../../../public/svgs/index";
import SearchInput from "@/components/SearchInput";
import { getFontList } from "@/services/apis/googleFont.apis";

type Props = {};

const ChangeFont = (props: Props) => {
  const [selected, setSelected] = useState();
  const [fontList, setFontList] = useState([
    {
      family: "Noto Sans Kawi",
      variants: ["regular", "500", "600", "700"],
      subsets: ["kawi", "latin", "latin-ext"],
      version: "v3",
      lastModified: "2023-10-25",
      files: {
        "500":
          "http://fonts.gstatic.com/s/notosanskawi/v3/92zBtBJLNqsg7tCciW0EPHNNh1ZgbtGWiTYDjvnK0ghmCpRyMjXVsQ.ttf",
        "600":
          "http://fonts.gstatic.com/s/notosanskawi/v3/92zBtBJLNqsg7tCciW0EPHNNh1ZgbtGWiTYDjvnKPg9mCpRyMjXVsQ.ttf",
        "700":
          "http://fonts.gstatic.com/s/notosanskawi/v3/92zBtBJLNqsg7tCciW0EPHNNh1ZgbtGWiTYDjvnKBw9mCpRyMjXVsQ.ttf",
        regular:
          "http://fonts.gstatic.com/s/notosanskawi/v3/92zBtBJLNqsg7tCciW0EPHNNh1ZgbtGWiTYDjvnK4AhmCpRyMjXVsQ.ttf",
      },
      category: "sans-serif",
      kind: "webfonts#webfont",
      menu: "http://fonts.gstatic.com/s/notosanskawi/v3/92zBtBJLNqsg7tCciW0EPHNNh1ZgbtGWiTYDjvnK4AhWC552.ttf",
    },
    {
      family: "Linefont",
      variants: [
        "100",
        "200",
        "300",
        "regular",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      subsets: ["latin"],
      version: "v3",
      lastModified: "2023-10-25",
      files: {
        "100":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY4UNbu7tmdXux3U.ttf",
        "200":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnYwUMbu7tmdXux3U.ttf",
        "300":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY9sMbu7tmdXux3U.ttf",
        "500":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY7cMbu7tmdXux3U.ttf",
        "600":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY1sLbu7tmdXux3U.ttf",
        "700":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY2ILbu7tmdXux3U.ttf",
        "800":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnYwULbu7tmdXux3U.ttf",
        "900":
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnYywLbu7tmdXux3U.ttf",
        regular:
          "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY4UMbu7tmdXux3U.ttf",
      },
      category: "display",
      kind: "webfonts#webfont",
      menu: "http://fonts.gstatic.com/s/linefont/v3/dg4I_pzpoqcLKUIzVfFMh1TF2rkhli25jn7CKTTWSumsFuSnY4UMXu_nnQ.ttf",
    },
  ]);

  useEffect(() => {
    getFontList("trending")
      .then((res) => {
        setFontList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="bg-fog h-full text-darkGreen flex flex-col items-center">
        {/* <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css2?family=${fontFamily}`}
      />
      <style>
        {`.fontFamily{
    font-family: ${fontFamily};
  }
  .fontWeight{
    font-weight: ${varient}
  }
  }`}
      </style> */}
        <BackArrow />
        <HatIco
          width={"25%"}
          className="rotate-180 self-center top-0 absolute"
        />
        <SizedBox height={10} />

        <div className="w-10/12">
          <SearchInput />

          {fontList.map((fontObj) => {
            return (
              <div className="w-full" key={fontObj.family + fontObj.version}>
                <div className="text-xl font-normal font-['Noto Sans']">
                  {fontObj.family}
                </div>
                <div className="text-3xl font-normal font-['Black Ops One']">
                  The Quick Brown Fox Jumps Over
                </div>
                <div className="w-full bg-black h-px mt-2 mb-6"></div>
              </div>
            );
          })}
        </div>
      </div>
      <SizedBox height={20} />
      <Footer />
    </div>
  );
};

export default ChangeFont;
