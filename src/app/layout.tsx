import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Quiz Engine",
  description: "Customizable quiz engine",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sansFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
