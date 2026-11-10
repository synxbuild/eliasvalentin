import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  lead?: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, children, align = "center", tone = "dark", lead, className, id }: Props) {
  return (
    <div data-reveal className={cn(align === "center" && "mx-auto text-center", className)}>
      <p className={tone === "dark" ? "tag" : "tag-light"}>{eyebrow}</p>
      <h2
        id={id}
        className={cn(
          "display mt-7 text-[2.3rem] sm:text-[3rem] lg:text-[3.4rem]",
          tone === "dark" ? "text-paper" : "text-[#16120e]",
        )}
      >
        {children}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-[1.02rem] leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
            tone === "dark" ? "text-smoke" : "text-[#4f4941]",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
