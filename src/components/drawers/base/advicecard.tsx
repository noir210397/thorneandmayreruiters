import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export type AdviceCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  className?: string;
};
export default function AdviceCard({
  link,
  description,
  imageSrc,
  title,
  className,
}: AdviceCardProps) {
  return (
    <Link
      href={link}
      className={twMerge(
        "flex text-black items-center my-2.5 gap-1 group",
        className
      )}
    >
      <div className="relative  w-[50px] h-[70px] shrink-0">
        <Image
          src={imageSrc}
          className="absolute inset-0 object-cover"
          alt={imageSrc}
          fill
        />
      </div>
      <div>
        <h4 className="font-semibold capitalize py-1 text-xs text-gray-400 group-hover:underline decoration-black decoration-1">
          {title}
        </h4>
        <p className="text-sm capitalize group-hover:underline decoration-black decoration-1">
          {description}
        </p>
      </div>
    </Link>
  );
}
