import Image from "next/image";

export default function SectionImage({ src }: { src: string }) {
  return (
    <>
      <div className="relative left-1/2 -translate-x-1/2 lg:w-4/5 max-w-[400px] h-[250px]">
        <span className="absolute w-1/2 h-2/5 -top-5 bg-primary -right-5"></span>
        <Image fill alt={src} src={src} />
      </div>
    </>
  );
}
