import Link from "next/link";
import { CgCopyright } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "./logo";

const icons = [
  { icon: <FaXTwitter />, path: "/" },
  { icon: <FaFacebookF />, path: "/" },
  { icon: <FaInstagram />, path: "/" },
  { icon: <FaLinkedinIn />, path: "/" },
  { icon: <FaYoutube />, path: "/" },
];
const links = [
  { header: "sitemap", list: ["home", "jobs", "candidates", "search"] },
  { header: "key content", list: ["investors", "feedback"] },
  { header: "privacy policy", list: ["our policy", "cookies"] },
];
export default function Footer() {
  return (
    <footer className="bg-black text-white lg:p-10 p-5 w-full">
      <div className="flex gap-5 justify-between lg:gap-10 w-full flex-col lg:flex-row items-center lg:items-start">
        <div>
          <Logo />
        </div>
        <div className="flex-1 flex flex-wrap gap-5 lg:justify-between px-5 w-full max-w-lg lg:max-w-none">
          {links.map(({ header, list }) => (
            <div key={header} className="shrink-0 flex-1">
              <div className="font-semibold capitalize py-2">{header}</div>{" "}
              <ul>
                {list.map((i) => (
                  <li
                    key={i}
                    className="text-sm cursor-pointer py-1 capitalize hover:underline decoration-1 decoration-white"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row gap-5 py-5 lg:flex-wrap lg:justify-normal justify-center">
        <div className="flex  items-center gap-3 lg:flex-wrap lg:justify-normal justify-center">
          {icons.map(({ icon, path }, index) => (
            <Link
              key={index}
              href={path}
              className="flex w-[30px] aspect-square rounded-full justify-center items-center border border-white"
            >
              {icon}
            </Link>
          ))}
        </div>
        <p className="capitalize flex justify-center items-center text-xs lg-text-sm">
          <span className="text-xl">
            <CgCopyright />
          </span>
          <span>
            {new Date().getFullYear()} thorne and may recruiters. all rights
            reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
