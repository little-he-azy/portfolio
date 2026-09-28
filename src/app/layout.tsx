import type { Metadata } from "next";
import {
  Fredoka,
  Nunito,
  Noto_Sans_SC,
} from "next/font/google";

import "lxgw-wenkai-screen-webfont/style.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AZY HE | Portfolio",
  description: "Personal portfolio of AZY HE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`
          ${fredoka.variable}
          ${nunito.variable}
          ${notoSansSC.variable}
          min-h-screen
          flex
          flex-col
          antialiased
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
