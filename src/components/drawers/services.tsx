import React from "react";
import DrawerWriteup from "./base/drawerwriteup";

const writeUp = {
  description: `The UK's leading employers trust us to deliver fast, efficient talent solutions that are tailored to their exact requirements. Browse our range of bespoke services and resources.`,
  link: "Read more",
  title: "Services",
  path: "/services",
};

export default function Services() {
  return (
    <div className="grid-cols-4 grid">
      {/* write up content here */}
      <DrawerWriteup {...writeUp} />
      {/* cards here */}
      <div className="col-span-3 grid grid-cols-3">
        {/* {cards.map((card) => (
            <DrawerCard key={card.title} {...card} />
          ))} */}
      </div>
    </div>
  );
}
