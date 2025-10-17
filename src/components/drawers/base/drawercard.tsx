import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { WriteUpProps } from "./drawerwriteup";
export type DrawerCardProps = Omit<WriteUpProps, "link"> & {
  className?: string;
};
export default function DrawerCard({
  description,
  path,
  title,
  className,
}: DrawerCardProps) {
  return (
    <Link
      href={path}
      className={twMerge("lg:block group py-2 flex items-center", className)}
    >
      <h3 className="text-base py-[2px] text-black group-hover:underline decoration-1 decoration-black  font-semibold">
        {title}
      </h3>
      <p className="lg:block hidden  py-[2px] text-sm text-black group-hover:underline decoration-1 decoration-black">
        {description}
      </p>
    </Link>
  );
}
