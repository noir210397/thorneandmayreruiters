import type { Metadata } from "next";
import { Lora, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const robotom = Roboto({
  variable: "--font-roboto-normal",
  subsets: ["latin"],
});
const loraNormal = Lora({
  variable: "--font-lora-normal",
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
    <html
      lang="en"
      className={` ${loraNormal.variable} ${loraNormal.className}`}
    >
      <body className={` antialiased text-black font-lora`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
