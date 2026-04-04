import { cva, type VariantProps } from "class-variance-authority";

import { buttonVariants } from "../button";
import { cn } from "../../lib/utils";

type NavLink = {
  href: string;
  label: string;
};

const topNavVariants = cva("", {
  variants: {
    variant: {
      editorial:
        "rounded-full border border-stone-400/70 bg-white/70 backdrop-blur-sm",
      contrast: "rounded-full border border-stone-900 bg-[#fffaf0]",
    },
  },
  defaultVariants: {
    variant: "editorial",
  },
});

const brandVariants = cva(
  "cursor-pointer text-xs font-medium uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        editorial:
          "tracking-[0.26em] text-stone-700 hover:text-stone-950 focus-visible:ring-stone-400",
        contrast:
          "tracking-[0.22em] text-stone-900 hover:text-[#6f7d68] focus-visible:ring-stone-500",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

const linkVariants = cva(
  "cursor-pointer text-xs uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        editorial:
          "tracking-[0.16em] text-stone-600 hover:text-stone-950 focus-visible:ring-stone-400",
        contrast:
          "tracking-[0.14em] text-stone-700 hover:text-stone-950 focus-visible:ring-stone-500",
      },
    },
    defaultVariants: {
      variant: "editorial",
    },
  },
);

type TopNavProps = {
  brand: string;
  ctaHref: string;
  ctaLabel: string;
  links: NavLink[];
} & VariantProps<typeof topNavVariants>;

export function TopNav({
  brand,
  ctaHref,
  ctaLabel,
  links,
  variant = "editorial",
}: TopNavProps) {
  return (
    <header className="shrink-0">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
          topNavVariants({ variant }),
        )}
      >
        <a
          href="#top"
          className={cn(brandVariants({ variant }))}
        >
          {brand}
        </a>
        <nav aria-label="Top navigation" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(linkVariants({ variant }))}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={ctaHref}
          className={cn(
            buttonVariants({ size: "default" }),
            "h-auto cursor-pointer rounded-full px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase",
            variant === "editorial"
              ? "border-[#98a790] bg-[#98a790] text-white hover:bg-[#86947f] focus-visible:ring-[#98a790]"
              : "border-stone-900 bg-stone-900 text-[#fffaf0] hover:bg-[#6f7d68] focus-visible:ring-stone-500",
          )}
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
