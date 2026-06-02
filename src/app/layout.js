import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSansSc = Noto_Sans_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerifSc = Noto_Serif_SC({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "尚品森林 | 高端庭院遮阳系统品牌官网",
  description:
    "尚品森林品牌官网，展示电动遮阳棚、防风卷帘、折叠天幕、生态凉亭、品牌荣誉、视频与全国安装服务能力。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className={`${notoSansSc.variable} ${notoSerifSc.variable}`}>
      <body>{children}</body>
    </html>
  );
}
