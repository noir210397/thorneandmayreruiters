import DrawerCard from "./base/drawercard";
import DrawerWriteup, { WriteUpProps } from "./base/drawerwriteup";

const cards = [
  {
    title: "E-guides & whitepapers",
    description:
      "Get access to the latest expert research, reports and insights.",
    path: "/insights/e-guides-and-whitepapers",
  },
  {
    title: "Career advice",
    description: "Learn ways to take the next step in your career.",
    path: "/insights/career-advice",
  },
  {
    title: "Podcasts",
    description:
      "Access our podcast series to hear the latest ideas from business leaders and recruitment experts in the UK.",
    path: "/insights/podcasts",
  },
  {
    title: "Hiring advice",
    description: "Resources and advice to get the best out of your workforce.",
    path: "/insights/hiring-advice",
  },
  {
    title: "Webinars",
    description:
      "Watch workforce leaders and experts exchange ideas and reveal new trends.",
    path: "/insights/webinars",
  },
  {
    title: "Salary guide",
    description:
      "Get the most comprehensive overview of salaries and hiring trends in your industry.",
    path: "/insights/salary-guide",
  },
];
const writeUp: WriteUpProps = {
  description: `Whether you’re seeking to hire talent or a new career move for yourself, we have the latest facts, trends and inspiration you need.`,
  link: "See all resources",
  title: "Insights",
  path: "/insights",
};

export default function Insights() {
  return (
    <div className="lg:grid grid-cols-4">
      <DrawerWriteup {...writeUp} />
      <div className="col-span-2 grid-cols-2 lg:grid gap-2 lg:px-2">
        {cards.map((card) => (
          <DrawerCard key={card.title} {...card} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
