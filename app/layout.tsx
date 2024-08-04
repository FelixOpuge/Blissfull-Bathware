import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blissful Bathware - Clawfoot, Freestanding & more",
  description: "Dive into luxury and soak in serenity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Header />
        <HeaderMain />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
