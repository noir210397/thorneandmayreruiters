"use client";
import useJobQuery from "@/hooks/useJobQuery";
import { makeUniqueStringArray } from "@/utils/utils";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";

export default function Search() {
  const { data, isLoading } = useJobQuery();
  function getRegions() {
    if (!data) return ["location"];
    else {
      const availableLocations = data.map(({ address }) =>
        address.town.toLowerCase()
      );
      return makeUniqueStringArray(["location", ...availableLocations]);
    }
  }
  const regions = getRegions();
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
          disabled={isLoading}
          name=""
          id=""
          className="w-full p-2 text-gray-500 font-medium h-full capitalize"
        >
          {regions.map((region) => (
            <option
              key={region}
              className="capitalize"
              value={region === "location" ? "" : region}
            >
              {region}
            </option>
          ))}
        </select>
      </div>
      <button className="bg-primary text-white px-5 py-2">Search</button>
      <Link href={`/`} className="underline decoration-1 decoration-primary">
        Looking for hire
      </Link>
    </div>
  );
}
