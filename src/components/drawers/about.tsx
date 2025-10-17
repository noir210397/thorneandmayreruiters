import React from "react";
import DrawerCard from "./base/drawercard";
import DrawerWriteup from "./base/drawerwriteup";

const cards = [
  {
    title: "Our story",
    description: "Learn more about our history and who we are.",
    path: "/about/our-story",
  },
  {
    title: "Partnerships & accreditations",
    description:
      "Partnerships with purpose. Learn more about the people and organisations we partner with.",
    path: "/about/partnerships-and-accreditations",
  },
  {
    title: "Our candidate & client stories",
    description:
      "Read more on how we champion the stories of our candidates and clients.",
    path: "/about/our-candidate-and-client-stories",
  },
  {
    title: "ESG & corporate responsibility",
    description:
      "Making a difference through our ESG and Corporate Responsibility programme.",
    path: "/about/esg-and-corporate-responsibility",
  },
  {
    title: "Media enquiries",
    description:
      "Journalists and other members of the media can contact our press team with enquiries relating to Robert Walters or recruitment market trends.",
    path: "/about/media-enquiries",
  },
  {
    title: "Equity, Diversity & Inclusion",
    description:
      "Our company's culture is important to us. Learn how our workplace promotes inclusion, diversity and respect for all.",
    path: "/about/equity-diversity-and-inclusion",
  },
  {
    title: "Investors",
    description: "Access the latest investor news from Robert Walters.",
    path: "/about/investors",
  },
];
const writeUp = {
  description: `Since our establishment in 1985, our belief remains the same: Building strong relationships with people is vital in a successful partnership.`,
  link: "Learn more",
  title: "About Thorne and may recruiters",
  path: "/about-us",
};

export default function About() {
  return (
    <div className="lg:grid grid-cols-3 ">
      <DrawerWriteup {...writeUp} />
      <div className="col-span-2 lg:grid grid-cols-2 gap-2 lg:px-2">
        {cards.map((card) => (
          <DrawerCard key={card.title} {...card} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
