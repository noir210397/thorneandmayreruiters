import DrawerCard, { DrawerCardProps } from "./base/drawercard";
import DrawerWriteup, { WriteUpProps } from "./base/drawerwriteup";

const cards: DrawerCardProps[] = [
  {
    title: "Accounting & Finance",
    description:
      "Explore a range of accounting and finance roles, from entry-level positions to senior management, in various industries including public accounting, corporate finance, investment banking, and financial planning.",
    path: "jobs/accounting-and-finance",
  },
  {
    title: "Legal",
    description:
      "Discover diverse legal career opportunities, including roles in corporate law, criminal law, intellectual property, and more, across law firms, corporate legal departments, and government agencies.",
    path: "jobs/legal",
  },
  {
    title: "Procurement & Supply Chain",
    description:
      "Find roles in procurement and supply chain management, including positions in logistics, inventory management, sourcing, and vendor relations, across various industries such as manufacturing, retail, and healthcare.",
    path: "jobs/procurement-and-supply-chain",
  },
  {
    title: "Technology & IT",
    description:
      "Explore a wide range of technology and IT roles, from software development and cybersecurity to data analysis and IT support, in industries such as tech startups, finance, healthcare, and more.",
    path: "jobs/technology-and-it",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Discover career opportunities in banking and financial services, including roles in retail banking, investment banking, wealth management, and insurance, across various financial institutions.",
    path: "jobs/banking-and-financial-services",
  },
  {
    title: "Risk & Compliance",
    description:
      "Find roles in risk management and compliance, including positions in regulatory compliance, internal audit, and risk assessment, across industries such as finance, healthcare, and manufacturing.",
    path: "jobs/risk-and-compliance",
  },
  {
    title: "Human Resources",
    description:
      "Explore diverse human resources roles, including positions in talent acquisition, employee relations, HR management, and organizational development, across various industries.",
    path: "jobs",
  },
  {
    title: "Sales & Marketing",
    description:
      "all sales and marketing roles, including positions in digital marketing, sales management, brand strategy, and market research, across industries such as retail, technology, and consumer goods.",
    path: "jobs/sales-and-marketing",
  },
  {
    title: "Business Support & Administration",
    description:
      "Business support and administration roles, including positions in office management, executive assistance, project coordination, and administrative support, across various industries.",
    path: "jobs/business-support-and-administration",
  },
  {
    title: "Projects & Change",
    description:
      "projects and change management roles, including positions in project coordination, change management, program management, and process improvement, across industries such as IT, finance, and healthcare.",
    path: "jobs/projects-and-change",
  },
  {
    title: "Manufacturing & Engineering",
    description:
      "Explore manufacturing and engineering roles, including positions in production management, quality control, mechanical engineering, and process engineering, across various industries such as automotive, aerospace, and consumer goods.",
    path: "jobs/manufacturing-and-engineering",
  },
];
const writeUp: WriteUpProps = {
  description: `Let our industry specialists listen to your aspirations and present
          your story to the most esteemed organisations in the UK, as we
          collaborate to write the next chapter of your successful career.`,
  link: "see all jobs",
  title: "jobs",
  path: "/jobs",
};

export default function Jobs() {
  return (
    <div className="grid-cols-3 lg:grid gap-3">
      {/* write up content here */}
      <DrawerWriteup {...writeUp} />
      {/* cards here */}
      <div className="col-span-2 lg:grid  grid-cols-2 gap-x-5 gap-y-2">
        {cards.map((card) => (
          <DrawerCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
