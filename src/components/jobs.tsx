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
import { useCallback, useEffect, useMemo, useState } from "react";
import { Job } from "@/types/job.types";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";

export default function Jobs() {
  const { data, isError, isLoading } = useJobQuery();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<Job[]>([]);

  // ---- Pagination setup ----
  const pageSize = 10;
  const currentPage = Number(searchParams.get("page")) || 1;

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const existing = params.getAll(name);

      if (!existing.includes(value)) {
        params.append(name, value);
      }

      // reset to first page when filters change
      params.set("page", "1");

      return params.toString();
    },
    [searchParams]
  );

  function filterQueryString(name: string, value: string) {
    const newParams = new URLSearchParams();
    const keys = makeUniqueStringArray(Array.from(searchParams.keys()));

    for (const key of keys) {
      const values = searchParams.getAll(key);

      if (key === name) {
        const filtered = values.filter(
          (v) => v.toLowerCase() !== value.toLowerCase()
        );
        if (filtered.length === 0) continue;
        for (const v of filtered) newParams.append(key, v);
      } else {
        for (const v of values) newParams.append(key, v);
      }
    }

    // reset to first page when filters change
    newParams.set("page", "1");

    return newParams.toString();
  }

  // ---- Filtering logic ----
  useEffect(() => {
    if (data) {
      const locations = searchParams.getAll("location");
      const sectors = searchParams.getAll("sector");

      const filtered = data.filter((item) => {
        const matchLocation =
          locations.length === 0 ||
          locations.some(
            (loc) => loc.toLowerCase() === item.address.town.toLowerCase()
          );

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

  // ---- Pagination slice ----
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage]);

  // ---- UI ----
  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="flex justify-center items-center w-full p-10 min-h-[500px]">
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
      { name: "sector", choices: sectors },
      { name: "location", choices: locations },
    ];

    const totalPages = Math.ceil(filteredData.length / pageSize);

    return (
      <div className="w-full flex justify-center flex-col md:flex-row">
        {/* Sidebar */}
        <div className="min-w-[300px]">
          <Root type="multiple">
            {options.map(({ choices, name }) => (
              <AccordionItem key={name} value={name}>
                <AccordionTrigger asChild>
                  <button className="flex justify-between w-full p-2">
                    <span className="uppercase font-medium">{name}</span>
                    <BsChevronUp className={styles.chevron} />
                  </button>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col w-full gap-3 p-2 text-sm font-medium">
                    {choices.map((choice) => (
                      <label key={choice} className="capitalize">
                        <input
                          type="checkbox"
                          className="mr-2 accent-primary"
                          value={choice}
                          checked={searchParams
                            .getAll(name)
                            .some(
                              (i) => i.toLowerCase() === choice.toLowerCase()
                            )}
                          onChange={(e) => {
                            const queryString = e.currentTarget.checked
                              ? createQueryString(name, choice)
                              : filterQueryString(name, choice);
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
            ))}
          </Root>
        </div>

        {/* Job Cards */}
        <div className="flex-1 flex flex-col items-center gap-5 pb-5">
          <div className="grid px-5 md:px-2 grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {paginatedData.length > 0 &&
              paginatedData.map((item) => <JobCard key={item.id} {...item} />)}
          </div>
          {paginatedData.length === 0 && (
            <div>no jobs found matching your search</div>
          )}
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 my-6">
              <button
                disabled={currentPage <= 1}
                onClick={() => setPage(currentPage - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50 border-primary flex justify-center items-center w-7 md:w-8 "
              >
                <FaChevronLeft />
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setPage(currentPage + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50 border-primary flex justify-center items-center w-7 md:w-8 "
              >
                <FaAngleRight />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
