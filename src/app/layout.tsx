import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <body
        className={` antialiased text-black font-lora flex flex-col min-h-screen w-full`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
