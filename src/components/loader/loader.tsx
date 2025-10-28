import { twMerge } from "tailwind-merge";
import Spinner from "../spinner";

export default function Loader({ className }: { className?: string }) {
  const style = twMerge(
    "flex justify-center items-center min-h-[calc(100vh-80px)]",
    className
  );
  return (
    <div className={style}>
      <Spinner borderStyle="black" size={40} />
    </div>
  );
}
