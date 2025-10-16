import Link from "next/link";

export default function DrawerBanner() {
  return (
    <div className="bg-white p-2">
      <Link
        href={"/"}
        className="underline decoration-1 decoration-primary text-white border-r-2 border-white"
      >
        Register your CV
      </Link>
      <Link
        href={"/"}
        className="underline decoration-1 decoration-primary text-white"
      >
        Looking to hire
      </Link>
    </div>
  );
}
