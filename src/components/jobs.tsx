"use client";

import Loader from "./loader/loader";
import JobCard from "./cards/jobcard";
import useJobQuery from "@/hooks/useJobQuery";
import { makeUniqueStringArray } from "@/utils/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Root,
} from "@radix-ui/react-accordion";
import { BsChevronUp } from "react-icons/bs";
import styles from "@/styles/accordion.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Job } from "@/types/job.types";

export default function Jobs() {
  const { data, isError, isLoading } = useJobQuery();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<Job[]>([]);
  console.log(data, filteredData);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const existing = params.getAll(name);

      // only append if not already present
      if (!existing.includes(value)) {
        params.append(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  function filterQueryString(name: string, value: string) {
    const newParams = new URLSearchParams();
    const keys = makeUniqueStringArray(Array.from(searchParams.keys()));

    for (const key of keys) {
      const values = searchParams.getAll(key);
      console.log(values);

      // if we're filtering this key, remove the specific value
      if (key === name) {
        const filtered = values.filter(
          (v) => v.toLowerCase() !== value.toLowerCase()
        );
        if (filtered.length === 0) continue; // skip if no values left
        for (const v of filtered) newParams.append(key, v);
      }
      // otherwise, just preserve all values for this key
      else {
        for (const v of values) newParams.append(key, v);
      }
    }
    console.log(newParams.toString());

    return newParams.toString();
  }
  useEffect(() => {
    return () => {};
  }, [data]);
  useEffect(() => {
    if (data) {
      const locations = searchParams.getAll("location");
      const sectors = searchParams.getAll("sector");

      const filtered = data.filter((item) => {
        // match if no location filter OR item's town is one of the selected locations
        const matchLocation =
          locations.length === 0 ||
          locations.some(
            (loc) => loc.toLowerCase() === item.address.town.toLowerCase()
          );

        // match if no sector filter OR any of the item's sectors are in selected sectors
        const matchSector =
          sectors.length === 0 ||
          item.sectors.some((sec) =>
            sectors.some(
              (selected) => selected.toLowerCase() === sec.toLowerCase()
            )
          );

        return matchLocation && matchSector;
      });

      setFilteredData(filtered);
      return;
    }

    setFilteredData([]);
  }, [data, searchParams]);
  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className=" flex justify-center items-center w-full p-10 min-h-[500px]">
        <span className="text-center text-2xl font-extrabold">
          unable to get jobs
        </span>
      </div>
    );
  if (data) {
    const locations = makeUniqueStringArray(
      data.map((item) => item.address.town)
    );
    const sectors = makeUniqueStringArray(
      data.map((item) => item.sectors).flat()
    );
    const options = [
      {
        name: "sector",
        choices: sectors,
      },
      {
        name: "location",
        choices: locations,
      },
    ];

    return (
      <div className="w-full flex justify-center flex-col md:flex-row ">
        <div className="border-2 border-green-400 min-w-[300px]">
          <Root type="multiple">
            {options.map(({ choices, name }) => {
              return (
                <AccordionItem key={name} value={name}>
                  <AccordionTrigger asChild>
                    <button className="flex justify-between w-full p-2">
                      <span className="uppercase font-medium">{name}</span>
                      <span>
                        <BsChevronUp className={styles.chevron} />
                      </span>
                    </button>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col w-full gap-3 p-2 text-sm font-medium ">
                      {choices.map((choice) => (
                        <label key={choice} className="capitalize">
                          <input
                            type="checkbox"
                            className="mr-2 accent-primary"
                            value={choice}
                            checked={
                              searchParams
                                .getAll(name)
                                .find(
                                  (i) =>
                                    i.toLowerCase() === choice.toLowerCase()
                                )
                                ? true
                                : false
                            }
                            onChange={(e) => {
                              const queryString = e.currentTarget.checked
                                ? createQueryString(name, choice)
                                : filterQueryString(name, choice);
                              console.log(queryString);

                              router.replace(`${pathname}?${queryString}`, {
                                scroll: true,
                              });
                            }}
                          />
                          {choice}
                        </label>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Root>
        </div>
        <div className="border-2 border-green-400 flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {filteredData.map((item) => (
            <JobCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
