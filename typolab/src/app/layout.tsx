import METADATA from "@/constants/metaData";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GA from "@/components/GA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: METADATA.MAIN.title,
  description: METADATA.MAIN.description,
  keywords: METADATA.MAIN.keywords,
  openGraph: {
    images: "/images/thumbnailImg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
