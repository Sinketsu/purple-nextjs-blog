import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({
  weight: ["400", "700"],
  subsets: ['cyrillic']
});

export const metadata: Metadata = {
  title: "Мой аниме блог",
  description: "Описание для курса",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
