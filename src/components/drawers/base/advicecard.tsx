import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type AdviceCardProps = {
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
    <Link href={link} className={twMerge("flex ", className)}>
      <div className="relative  w-20 h-30 shrink-0">
        <Image
          src={imageSrc}
          className="absolute inset-0"
          alt={imageSrc}
          fill
        />
      </div>
      <div>
        <h4 className="font-semibold py-1 text-xs">{title}</h4>
        <p className="text-sm font-semibold">{description}</p>
      </div>
    </Link>
  );
}
