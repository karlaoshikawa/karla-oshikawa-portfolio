import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karla Oshikawa - Portfolio",
  description:
    "Portfolio showcasing my ongoing web development projects and studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="app/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
