import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "타이포랩 TYPOLAB - 국문 영문 폰트 페어링, 폰트 검색, 저장",
  description:
    "선택한 한글 폰트와 유사한 영문 폰트를 추천합니다. 폰트 정보 검색, 국문 영문 폰트 페어링, 나만의 별명으로 담은 폰트를 관리하고 이미지로 내보내기하세요",
  keywords: "fonts, korean, english, font pairing, 폰트페어링, design system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
