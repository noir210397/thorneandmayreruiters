import {
  Root,
  AccordionSingleProps,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { createContext, ReactNode, use, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsChevronUp } from "react-icons/bs";
import styles from "../styles/accordion.module.css";
const AccordionContext = createContext<
  | {
      setValue: (value?: string) => void;
    }
  | undefined
>(undefined);
type HoverAccordionProps = Omit<
  AccordionSingleProps,
  "type" | "collapsible"
> & {
  triggeredBy?: "click" | "hover";
};

export default function HoverAccordion(props: HoverAccordionProps) {
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  );
  const { children, ...rest } = props;
  const singleProps = rest as Omit<AccordionSingleProps, "type"> & {
    triggeredBy?: "click" | "hover";
  };
  function setValue(value: string | undefined = undefined) {
    setAccordionValue(value);
  }

  return (
    <AccordionContext.Provider value={{ setValue }}>
      <Root
        type="single"
        {...singleProps}
        value={accordionValue}
        collapsible
        onValueChange={setAccordionValue}
      >
        {children}
      </Root>
    </AccordionContext.Provider>
  );
}
export function HoverAccordionItem({
  className,
  children,
  value,
}: {
  children: ReactNode;
  className?: string;
  value: string;
}) {
  const context = use(AccordionContext);
  if (!context) {
    throw new Error(
      "HoverAccordionTrigger must be used within a HoverAccordion"
    );
  }
  const { setValue } = context;
  return (
    <AccordionItem value={value} asChild>
      <div
        className={twMerge(className, "")}
        onMouseEnter={() => setValue(value)}
        onMouseLeave={() => setValue()}
      >
        {children}
      </div>
    </AccordionItem>
  );
}
export function HoverAccordionTrigger({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = use(AccordionContext);
  if (!context) {
    throw new Error(
      "HoverAccordionTrigger must be used within a HoverAccordion"
    );
  }
  return (
    <AccordionTrigger asChild>
      <button
        className={twMerge("flex justify-center items-center", className)}
      >
        <span className="pe-2 font-semibold text-sm">{children}</span>
        <span className="inline text-xl text-primary font-semibold">
          <BsChevronUp className={styles.chevron} />
        </span>
      </button>
    </AccordionTrigger>
  );
}

export function HoverAccordionContent({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  const context = use(AccordionContext);
  if (!context) {
    throw new Error(
      "HoverAccordionTrigger must be used within a HoverAccordion"
    );
  }
  return (
    <AccordionContent asChild>
      <div className={twMerge("", className)}>
        <div className="max-w-[90%] mx-auto py-5 text-sm">{children}</div>
      </div>
    </AccordionContent>
  );
}
