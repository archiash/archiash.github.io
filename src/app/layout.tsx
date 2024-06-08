import type { Metadata } from "next";
import { Inter, Chonburi } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chon = Chonburi({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Pada Paradise", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={chon.className}>{children}</body>
    </html>
  );
}
