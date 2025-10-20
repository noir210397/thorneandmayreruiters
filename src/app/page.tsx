import Search from "@/components/search";
import SectionImage from "@/components/sectionimage";
import Image from "next/image";
import Link from "next/link";
const services = [
  {
    title: "recruitment",
    description:
      "Leverage our specialised industry expertise, and global reach to champion your story and connect you with the best professionals who will transform your business.",
  },
  {
    title: "outsourcing",
    description: `Experience agile recruitment outsourcing solutions tailored to your unique requirements, seamlessly scalable to match your evolving needs and objectives.
`,
  },
  {
    title: "talent advisory",
    description:
      "Elevate your hiring strategy with our data-driven marketing intelligence and ESG solutions, empowering your business to cultivate talent, foster growth, and future-proof your success. ",
  },
];
const areas = [
  "Accounting & Finance",
  "Banking & Financial Services",
  "Business Support",
  "Human Resources",
  "Legal",
  "Procurement & Supply Chain",
  "Risk, Compliance & Financial Crime",
  "Sales & Commercial",
  "Technology & Transformation",
];

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative h-max w-full lg:block flex justify-center items-center lg:px-20 px-10 lg:pt-20 pt-28 pb-10"
      >
        <div
          id="background-design"
          className="flex absolute inset-0 flex-col-reverse lg:flex-row"
        >
          <div className="flex-1 lg:w-[50%] w-full bg-black"></div>
          <div className="flex-1 lg:w-[50%] w-full relative overflow-hidden">
            <Image
              alt="hero-image"
              fill={true}
              // height={1000}
              // width={1000}
              src={`https://images.pexels.com/photos/8424586/pexels-photo-8424586.jpeg`}
            />
          </div>
        </div>
        <div id="info-side" className="relative w-full max-w-3xl bg-black">
          <div
            id="info-container"
            className="relative bg-black w-full  lg:p-15 p-5 flex flex-col gap-5"
          >
            <span className="absolute bg-primary h-10 w-1/3 -top-10 -left-10 max-w-[300px] min-w-[200px]"></span>
            <span className="absolute bg-primary w-10 top-0 h-1/3 min-h-[150px] -left-10"></span>
            <div className="text-white ">
              <h1 className="lg:text-[calc(2vw+10px)] text-[calc(3vw+10px)] capitalize font-extrabold pb-5">
                Lets take a closer look at your future
              </h1>
              <p>
                We take the time to listen to, and fully connect with, our
                clients and candidates. Thats why were the worlds most trusted
                talent solutions business.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <Link
                href={"/jobs"}
                className="capitalize text-white bg-primary px-3 py-2 mr-2 block w-full lg:w-max text-center"
              >
                search for jobs
              </Link>
              <Link
                href={"/jobs"}
                className="capitalize text-white bg-black px-3 py-2 border-2 border-primary block w-full lg:w-max text-center"
              >
                Looking for hire
              </Link>
            </div>
            <p className="border-l-2 border-primary text-gray-400 px-2">
              Leading recruitment agency, talent advisory and outsourcing
              experts in the UK
            </p>
          </div>
        </div>
      </section>
      {/* hero section ends */}
      <div className="px-5 py-10">
        <Search />
      </div>
      <section id="services" className="p-10">
        <h2 className="text-2xl font-extrabold capitalize py-5">
          our services
        </h2>
        <div className="flex gap-5 md:flex-row flex-col justify-center items-center">
          {services.map(({ description, title }, index) => {
            return (
              <div
                key={title}
                className="flex-1 max-w-[400px] flex flex-col gap-5 cursor-pointer"
              >
                <div className="h-[250px] w-full px-10 bg-black text-lg text-white flex items-center relative ">
                  <span
                    className={`absolute w-3/5 left-[30px] bg-primary top-1/2 -translate-y-1/2 h-3/5 ${
                      index !== 0 && "hidden"
                    }`}
                  ></span>
                  <span
                    className={`absolute ${
                      index === 0
                        ? "bg-gray-100 opacity-10 h-1/2 w-1/3 right-0 top-10"
                        : index === 1
                        ? "bg-primary w-3/5 bottom-0 left-0 h-[50px]"
                        : "bg-primary top-0 left-0 w-[60px] h-[90%]"
                    }`}
                  ></span>
                  <span
                    className={`bg-gray-100 opacity-10 absolute ${
                      index === 0
                        ? "w-1/2 left-0 h-1/3 bottom-0"
                        : index === 1
                        ? "bg-gray-100 h-4/5 bottom-0 left-0 opacity-10  w-[60px]"
                        : "w-[90px] bg-gray-100 opacity-10 bottom-0 left-0 h-2/5"
                    }`}
                  ></span>
                  <span className="uppercase text-2xl relative">{title}</span>
                </div>
                <div className="line-clamp-3 w-full">{description}</div>
                <Link
                  href={"/"}
                  className="font-extrabold underline decoration-primary"
                >
                  Learn more
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section id="benchmark" className="mx-10 bg-black text-white">
        <div className="flex px-5 justify-center items-center lg:flex-row flex-col-reverse">
          <div className="flex-1 flex flex-col gap-5 justify-center py-2">
            <h2 className="text-[calc(2vw+10px)] font-semibold capitalize">
              throne and may survey {new Date().getFullYear()} salary survey
            </h2>
            <p>
              Our Salary Survey is your go-to guide for industry trends, helping
              you make bold career moves and stay ahead in talent attraction and
              retention.
            </p>
            <Link
              href={"/"}
              className="capitalize bg-primary py-3 px-2 inline-block w-fit"
            >
              benchmark your salary
            </Link>
          </div>
          <div className="flex-1 relative py-10 px-5 h-[300px] w-full">
            <SectionImage src="https://images.pexels.com/photos/7394570/pexels-photo-7394570.jpeg" />
          </div>
        </div>
      </section>
      <section className="mx-10">
        <h2 className="text-2xl font-semibold pt-5 ">Areas we recruit in</h2>
        <div>
          <div className="flex flex-wrap gap-5 py-5">
            {areas.map((area) => (
              <span
                key={area}
                className="underline decoration-2 decoration-primary font-medium cursor-pointer"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
