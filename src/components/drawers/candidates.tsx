import React from "react";
import DrawerCard, { DrawerCardProps } from "./base/drawercard";
import DrawerWriteup, { WriteUpProps } from "./base/drawerwriteup";
import AdviceCard, { AdviceCardProps } from "./base/advicecard";

const cards: DrawerCardProps[] = [
  {
    title: "Career advice",
    path: "/candidates/career-advice",
    description: "Get insights to elevate your professional story.",
  },
  {
    title: "Submit your CV",
    path: "/candidates/submit-cv",
    description:
      "Let us help you write the next chapter in your career. Tell us your story today.",
  },
  {
    title: "Refer a friend",
    path: "/candidates/refer-a-friend",
    description: "Refer your friend, and be rewarded.",
  },
  {
    title: "Salary calculator",
    path: "/candidates/salary-calculator",
    description:
      "Benchmark your salary and explore hiring trends in your industry.",
  },
  {
    title: "International career management",
    path: "/candidates/international-career-management",
    description:
      "Your career has no borders. Learn how you can take your talents to the world.",
  },
  {
    title: "Contractor Hub",
    path: "/candidates/contractor-hub",
    description:
      "Get access to all the tips and tools to help you with your contracting career.",
  },
];

const writeUp: WriteUpProps = {
  description: `Together, we’ll map out career-defining, life-changing pathways to
          achieve your career ambitions. Browse our range of services, advice,
          and resources.`,
  link: "Learn more",
  title: "candidates",
  path: "/candidates",
};
const advices: AdviceCardProps[] = [
  {
    description: "how to resign professionally",
    imageSrc:
      "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg",
    link: "/",
    title: "career advice",
  },
  {
    description: "how to create great cv",
    imageSrc:
      "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg",
    link: "/",
    title: "career advice",
  },
  {
    description: "how to prepare for an interview",
    imageSrc:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    link: "/",
    title: "career advice",
  },
];

export default function Candidates() {
  return (
    <div className="lg:grid grid-cols-4">
      <DrawerWriteup {...writeUp} />
      <div className="col-span-2 lg:grid grid-cols-2 gap-1 lg:px-2">
        {cards.map((card) => (
          <DrawerCard key={card.title} {...card} />
        ))}
      </div>
      <div>
        {advices.map((item) => (
          <AdviceCard key={item.description} {...item} />
        ))}
      </div>
    </div>
  );
}
