import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import style from "./layout.module.css";
import { MainNav } from "./_components/MainNav/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS API fetch",
  description: "Part of the NextJS notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <h1>Next.js API fetch</h1>
        </header>
        <div className={style.fullPanel}>
          <aside className={style.sideMenu}>
            <MainNav />
          </aside>
          <main className={style.mainPage}>{children}</main>
        </div>
      </body>
    </html>
  );
}
