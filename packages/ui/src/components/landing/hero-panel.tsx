import { cva, type VariantProps } from "class-variance-authority";

import { buttonVariants } from "../button";
import { cn } from "../../lib/utils";

const panelVariants = cva("flex min-h-0 flex-1 flex-col p-6 sm:p-8 lg:p-10", {
  variants: {
    variant: {
      editorial: "rounded-[2rem] border border-stone-300/80 bg-[#fffdf9]/85",
      contrast: "rounded-[2rem] border border-stone-900 bg-[#fffaf0]",
    },
  },
  defaultVariants: {
    variant: "editorial",
  },
});

const eyebrowVariants = cva(
  "mb-4 inline-flex w-fit px-3 py-1 text-[0.65rem] font-medium tracking-[0.18em] uppercase",
  {
    variants: {
      variant: {
        editorial: "rounded-full border border-stone-300 bg-white/80 text-stone-600",
        contrast: "rounded-full border border-stone-900 bg-white text-stone-900",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

const bodyVariants = cva("mt-5 max-w-2xl text-sm leading-7 sm:text-base", {
  variants: {
    variant: {
      editorial: "text-stone-700",
      contrast: "text-stone-800",
    },
  },
  defaultVariants: {
    variant: "editorial",
  },
});

const contactWrapVariants = cva(
  "mt-auto grid gap-3 border-t pt-5 text-sm sm:grid-cols-[auto_1fr]",
  {
    variants: {
      variant: {
        editorial: "border-stone-300",
        contrast: "border-stone-900/20",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

const contactChipVariants = cva(
  "rounded-full border bg-white px-3 py-2",
  {
    variants: {
      variant: {
        editorial: "border-stone-300 text-stone-700",
        contrast: "border-stone-900/20 text-stone-900",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

type HeroPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  contactId: string;
  contactLabel: string;
  contactNote: string;
} & VariantProps<typeof panelVariants>;

export function HeroPanel({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  contactId,
  contactLabel,
  contactNote,
  variant = "editorial",
}: HeroPanelProps) {
  const titleLines = title.split("\n");

  return (
    <section id="top" className="grid min-h-0 flex-1 gap-3 py-3">
      <div className={cn(panelVariants({ variant }))}>
        <div className={cn(eyebrowVariants({ variant }))}>
          {eyebrow}
        </div>
        <h1 className="max-w-5xl font-[family-name:var(--font-heading)] text-5xl leading-[0.92] font-medium tracking-[-0.05em] text-balance sm:text-6xl lg:text-[7rem]">
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className={cn(bodyVariants({ variant }))}>{description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={ctaHref}
            className={cn(
              buttonVariants({ size: "default" }),
              "h-auto cursor-pointer rounded-full px-6 py-3 text-center text-sm font-medium tracking-[0.08em] uppercase",
              variant === "editorial"
                ? "bg-stone-900 text-[#fffdf9] hover:bg-[#98a790] focus-visible:ring-stone-400"
                : "bg-[#6f7d68] text-white hover:bg-stone-900 focus-visible:ring-stone-500",
            )}
          >
            {ctaLabel}
          </a>
        </div>
        <div id={contactId} className={cn(contactWrapVariants({ variant }))}>
          <span className={cn(contactChipVariants({ variant }))}>
            {contactLabel}
          </span>
          <span
            className={cn(
              "self-center",
              variant === "editorial" ? "text-stone-600" : "text-stone-700",
            )}
          >
            {contactNote}
          </span>
        </div>
      </div>
    </section>
  );
}
