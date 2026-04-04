import { headers } from "next/headers";

import { TopNav } from "@tin4/ui";

import { auth } from "@/lib/auth";

import { TopNavUserMenu } from "./top-nav-user-menu";

type NavLink = {
  href: string;
  label: string;
};

type TopNavAuthProps = {
  brand: string;
  brandHref?: string;
  ctaHref: string;
  ctaLabel: string;
  links: NavLink[];
  variant?: "editorial" | "contrast";
};

export async function TopNavAuth({
  brand,
  brandHref = "#top",
  ctaHref,
  ctaLabel,
  links,
  variant = "editorial",
}: TopNavAuthProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <TopNav
      brand={brand}
      brandHref={brandHref}
      ctaHref={ctaHref}
      ctaLabel={ctaLabel}
      links={links}
      variant={variant}
      endContent={
        session?.user ? (
          <TopNavUserMenu
            email={session.user.email}
            image={session.user.image}
            name={session.user.name}
          />
        ) : undefined
      }
    />
  );
}
