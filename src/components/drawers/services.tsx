import React from "react";
import DrawerWriteup from "./base/drawerwriteup";

const writeUp = {
  description: `The UK's leading employers trust us to deliver fast, efficient talent solutions that are tailored to their exact requirements. Browse our range of bespoke services and resources.`,
  link: "Read more",
  title: "Services",
  path: "/services",
};
const services = [
  {
    title: "recruitment",
    list: [
      "permanent recruitment",
      "temporary recruitment",
      "interim management",
      "executive search",
      "pubic sector recruitment",
      "payroll solutions",
    ],
  },
  {
    title: "outsourcing",
    list: ["recruitment process outsourcing", "statement of work"],
  },
  {
    title: "talent advisory",
    list: ["market intelligence", "future work", "talent development"],
  },
];
export default function Services() {
  return (
    <div className="grid-cols-4 lg:grid">
      {/* write up content here */}
      <DrawerWriteup {...writeUp} />
      {/* cards here */}
      <div className="col-span-3 grid lg:grid-cols-3 grid-cols-2 text-black lg:px-2 py-2">
        {services.map((item) => {
          return (
            <div key={item.title} className="">
              <div className="font-semibold capitalize">{item.title}</div>
              <ul>
                {item.list.map((i) => (
                  <li
                    key={i}
                    className="hover:underline decoration-1 decoration-black capitalize text-sm py-2"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
