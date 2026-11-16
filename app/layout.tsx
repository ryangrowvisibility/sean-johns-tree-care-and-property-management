import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Merriweather({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "900"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Sean John's Tree Care & Property Management | Tree Trimming, Removal & Yard Care in Toronto & the GTA",
  description:
    "Neighbour-run tree trimming, tree removal, yard maintenance and yard makeovers in Toronto and the GTA. 5.0 stars from 9 Google reviews. Sean shows up on time, prices fairly and cleans up. Call or text (647) 567-8733.",
  openGraph: {
    title: "Sean John's Tree Care & Property Management",
    description: "Tree trimming, removal and yard care from a local neighbour who actually shows up. 5.0 stars on Google. Call or text (647) 567-8733.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
