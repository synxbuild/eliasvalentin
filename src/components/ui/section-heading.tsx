import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, children, align = "left", className, id }: Props) {
  return (
    <div data-reveal className={cn(align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", align === "center" && "justify-center")}>{eyebrow}</p>
      <h2 id={id} className="display mt-5 text-[2.35rem] sm:text-5xl lg:text-[3.6rem]">
        {children}
      </h2>
    </div>
  );
}
