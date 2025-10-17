import DrawerWriteup from "./base/drawerwriteup";

const writeUp = {
  description: `Truly global and proudly local, our story starts in London in 1985, with our UK operation now based in 7 locations across the country.`,
  link: "Get in touch",
  title: "Contact Us",
  path: "/contact",
};

export default function Contact() {
  return (
    <div className="grid-cols-3 lg:grid ">
      {/* write up content here */}
      <DrawerWriteup {...writeUp} />
      {/* cards here */}
    </div>
  );
}
