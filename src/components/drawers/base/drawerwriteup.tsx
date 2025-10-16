import Link from "next/link";

export type WriteUpProps = {
  title: string;
  description: string;
  path: string;
  link: string;
};

export default function DrawerWriteup({
  description,
  path,
  title,
  link,
}: WriteUpProps) {
  return (
    <div className="lg:border-r border-gray-400 flex flex-col gap-2 w-full col-span-1 text-black">
      <h3 className="capitalize font-bold lg:font-extrabold text-base">
        {title}
      </h3>
      <p className="pe-1">{description}</p>
      <Link
        href={path}
        className="underline decoration-2 decoration-primary  capitalize lg:font-semibold"
      >
        {link}
      </Link>
    </div>
  );
}
