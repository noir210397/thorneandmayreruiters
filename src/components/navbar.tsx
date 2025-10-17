"use client";
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Root,
} from "@radix-ui/react-accordion";
import styles from "../styles/accordion.module.css";
import HoverAccordion, {
  HoverAccordionContent,
  HoverAccordionItem,
  HoverAccordionTrigger,
} from "./accordion";
import Drawer from "./drawers";
import Logo from "./logo";
import { TbWorld } from "react-icons/tb";
import { BsChevronUp } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { createElement, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuLine } from "react-icons/ri";
const icons = [
  { icon: FaXTwitter, path: "/" },
  { icon: FaFacebookF, path: "/" },
  { icon: FaInstagram, path: "/" },
  { icon: FaLinkedinIn, path: "/" },
  { icon: FaYoutube, path: "/" },
];
const navItems = [
  {
    header: "Jobs",
    content: <Drawer.Jobs />,
  },
  {
    header: "Candidates",
    content: <Drawer.Candidates />,
  },
  {
    header: "Services",
    content: <Drawer.Services />,
  },
  {
    header: "Insights",
    content: <Drawer.Insights />,
  },
  {
    header: "About us",
    content: <Drawer.About />,
  },
  {
    header: "Contact us",
    content: <Drawer.Contact />,
  },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="lg:block hidden">
        <Root type="single" collapsible>
          <AccordionItem
            value="language"
            className=" py-2 data-[state=open]:pb-0 "
          >
            <AccordionHeader
              asChild
              className="flex justify-end items-center relative px-2"
            >
              <div>
                <span className="uppercase border-r border-gray-400 px-2 py-1 text-sm cursor-pointer">
                  register your cv
                </span>
                <span className="uppercase border-l border-gray-400 px-2 py-1 text-sm cursor-pointer">
                  looking to hire
                </span>
                <AccordionTrigger asChild>
                  <button className="group flex gap-2 justify-center items-center cursor-pointer">
                    <span className="flex gap-1 justify-center items-center">
                      <TbWorld /> <span>EN</span>
                    </span>
                    <span className={styles.chevron}>
                      <BsChevronUp />
                    </span>
                    {/* <BsChevronUp className="transition-transform duration-300 [&group-[data-[state=open]]]:rotate-180" /> */}
                  </button>
                </AccordionTrigger>
              </div>
            </AccordionHeader>
            <AccordionContent asChild>
              <div className="text-end text-black bg-gray-100 w-full py-1 px-2 mt-2">
                English
              </div>
            </AccordionContent>
          </AccordionItem>
        </Root>
      </div>
      <header className="bg-black h-[80px] relative flex items-center justify-between lg:px-10 px-5">
        <Logo />
        <div className="flex h-full gap-4">
          <nav id="desktop-nav" className="lg:flex hidden h-full">
            {navItems.map(({ content, header }) => {
              return (
                // <div key={header}>
                <HoverAccordion key={header}>
                  <HoverAccordionItem
                    value={header}
                    className="cursor-pointer text-white h-full flex justify-center items-center"
                  >
                    <HoverAccordionTrigger className="px-2 data-[state=open]:bg-gray-400 h-full">
                      {header}
                    </HoverAccordionTrigger>
                    <HoverAccordionContent className="bg-white w-full absolute inset-x-0 top-[80px] border border-gray-400">
                      {content}
                    </HoverAccordionContent>
                  </HoverAccordionItem>
                </HoverAccordion>
                // </div>
              );
            })}
          </nav>
          {/* mobile nav */}
          {isSidebarOpen && (
            <nav
              id="mobile-nav"
              className="overflow-y-auto border-b border-gray-400 lg:hidden absolute  top-[80px]  inset-x-0 bg-black text-white "
            >
              <Root type="single" collapsible>
                {navItems.map(({ content, header }) => {
                  return (
                    <AccordionItem
                      value={header}
                      key={header}
                      className="w-full"
                    >
                      <AccordionTrigger asChild>
                        <button className="data-[state=open]:bg-gray-500 flex justify-between items-center px-5 w-full border-b border-gray-500 py-5">
                          <span className="font-semibold">{header}</span>
                          <span className="text-primary text-lg">
                            <BsChevronUp className={styles.chevron} />
                          </span>
                        </button>
                      </AccordionTrigger>
                      <AccordionContent asChild>
                        <div className="bg-white py-5 px-5">{content}</div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Root>
            </nav>
          )}
          <Root type="single" collapsible>
            <AccordionItem
              value="account"
              className="relative h-full flex justify-center items-center ms-4"
            >
              <AccordionTrigger asChild>
                <button className="group flex gap-2 justify-center items-center cursor-pointer text-primary text-xl font-semibold">
                  <span className="flex gap-1 justify-center items-center text-2xl">
                    <CgProfile />
                  </span>
                  <span className="text-white text-sm lg:inline hidden">
                    My Account
                  </span>
                  <span className="lg:inline hidden">
                    <BsChevronUp className={styles.chevron} />
                  </span>
                  {/* <BsChevronUp className="transition-transform duration-300 [&group-[data-[state=open]]]:rotate-180" /> */}
                </button>
              </AccordionTrigger>
              <AccordionContent asChild>
                <div className="absolute top-[80px] cursor-pointer right-0 bg-white">
                  <ul className="*:px-2 *:py-4 *:border-b border-black">
                    <li>Sign Up</li>
                    <li>Sign In</li>
                  </ul>
                  <div className="py-4">
                    <span className="capitalize font-semibold p-2">
                      follow us on
                    </span>
                    <div className="flex gap-3 p-2">
                      {icons.map(({ icon, path }, index) => (
                        <Link
                          href={path}
                          key={index}
                          className="flex w-[30px] aspect-square rounded-full justify-center items-center border border-black"
                        >
                          {createElement(icon)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Root>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-xl lg:hidden inline-block text-white"
          >
            {isSidebarOpen ? <AiOutlineClose /> : <RiMenuLine />}
          </button>
        </div>
      </header>
    </>
  );
}
