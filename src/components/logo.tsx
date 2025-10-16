import Link from "next/link";

export default function Logo({
  //   theme,
  size,
}: {
  //   theme: "light" | "dark";
  size?: number;
}) {
  return (
    <Link
      href={`/`}
      style={{ fontSize: size || 16, lineHeight: 1, letterSpacing: "0.005em" }}
      className="flex flex-col p-2 w-max font-bold text-white"
    >
      <div className="flex justify-center items-center flex-1 border-b-white border-b pb-[1px]">
        <span>
          Thorne<span className="text-primary me-[1px]">&</span>
        </span>
        {/* <span className="h-[1px] flex-1 bg-white min-w-2 "></span> */}
      </div>
      <div className="flex justify-center items-center flex-1 border-t-white border-t pt-[1px]">
        {/* <span className="h-[1px] flex-1 bg-white min-w-2 me-2 shrink-0"></span> */}
        <span>MayRecruiters</span>
      </div>
    </Link>
  );
}
