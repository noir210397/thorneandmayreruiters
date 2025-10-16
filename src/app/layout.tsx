import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const robotom = Roboto({
  variable: "--font-roboto-normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thorne and May Recruiters",
  description: "the No 1 recruiters in peterboroough Uk all jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${robotom.variable}antialiased text-black`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
