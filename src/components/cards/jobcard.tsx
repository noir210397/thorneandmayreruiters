import { Job } from "@/types/job.types";
import Link from "next/link";
import React from "react";
// import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

export default function JobCard(props: Job) {
  const { type: title, address, createdAt, description, id } = props;
  const date = new Date(createdAt).toDateString();
  return (
    <div className="px-5 flex flex-col  w-full py-3 rounded-xl bg-white border border-gray-300 cursor-pointer">
      <div className="flex gap-2 justify-between">
        <span className="font-extrabold">{title}</span>

        <button>
          <FaRegHeart />
        </button>
      </div>
      <span className="capitalize text-sm">
        <span className="font-semibold text-base">Salary: </span>negotiable
      </span>
      <span className="capitalize text-sm">
        <span className="font-semibold text-base">Location: </span>
        {address.town}
      </span>
      <span className="capitalize text-sm">
        <span className="font-semibold text-base">Date Posted: </span>
        {date}
      </span>
      <p>{description}</p>
      <Link
        href={`/jobs/${id}`}
        className="capitalize underline decoration-2 decoration-primary"
      >
        read more
      </Link>
    </div>
  );
}
