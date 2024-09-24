import METADATA from "@/constants/metaData";
import "./globals.css";
import type { Metadata } from "next";
import GA from "@/components/GA";

export const metadata: Metadata = {
  metadataBase: new URL("https://typolabo.com"),
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
      {/* <GA /> */}
      <body>{children}</body>
    </html>
  );
}
