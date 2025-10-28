import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Provider from "@/context";

const loraNormal = Lora({
  variable: "--font-lora-normal",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Thorne and May Recruiters",
  description: "the No 1 recruiters in peterborough Uk all jobs",
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
      <Provider>
        <body
          className={` antialiased text-black font-lora flex flex-col min-h-screen w-full bg-white`}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
