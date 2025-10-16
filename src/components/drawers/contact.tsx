import DrawerWriteup from "./base/drawerwriteup";

const writeUp = {
  description: `Truly global and proudly local, our story starts in London in 1985, with our UK operation now based in 7 locations across the country.`,
  link: "Get in touch",
  title: "Contact Us",
  path: "/contact",
};

export default function Contact() {
  return (
    <div className="grid-cols-3 grid ">
      {/* write up content here */}
      <DrawerWriteup {...writeUp} />
      {/* cards here */}
      <div></div>
      <div className="col-span-2 grid-cols-2 px-2 gap-2">
        {/* {cards.map((card) => (
              <DrawerCard key={card.title} {...card} />
            ))} */}
      </div>
    </div>
  );
}
