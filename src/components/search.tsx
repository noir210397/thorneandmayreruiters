import Link from "next/link";
import { GrSearch } from "react-icons/gr";
const regions = [
  "North East",
  "North West",
  "Yorkshire and the Humber",
  "East Midlands",
  "West Midlands",
  "East of England",
  "London",
  "South East",
  "South West",
  "Wales",
  "Scotland",
  "Northern Ireland",
];

export default function Search() {
  return (
    <div className="flex gap-5 lg:flex-row flex-col lg:w-[80%] w-[90%] mx-auto justify-center items-center">
      <span className="font-semibold">Looking for a job?</span>
      <div className="flex-1 w-full flex h-[50px] justify-center items-center px-3 bg-gray-200 text-gray-500 placeholder:text-gray-500  focus-within:border-blue-600 border-1 border-gray-500">
        <GrSearch className="text-primary" />
        <input
          type="text"
          className="flex-1 focus:outline-0 p-2"
          placeholder="Search by job title"
        />
      </div>
      <div className="flex-1 h-[50px] bg-gray-200 w-full border-1 border-gray-500">
        <select
          name=""
          id=""
          className="w-full p-2 text-gray-500 font-medium h-full"
        >
          <option>Location</option>
          {regions.map((r) => (
            <option key={r} className="">
              {r}
            </option>
          ))}
        </select>
      </div>
      <Link href={"/jobs"} className="bg-primary text-white px-5 py-2">
        Search
      </Link>
      <Link href={`/`} className="underline decoration-1 decoration-primary">
        Looking for hire
      </Link>
    </div>
  );
}
