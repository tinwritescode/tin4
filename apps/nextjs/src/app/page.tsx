import { HeroPanel, LandingShell } from "@tin4/ui";

import { TopNavAuth } from "@/components/auth/top-nav-auth";

export default function Home() {
  const links = [
    { label: "Ant", href: "/ant" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <LandingShell>
      <TopNavAuth
        brand="tin4"
        brandHref="/"
        links={links}
        ctaHref="#contact"
        ctaLabel="Contact"
        variant="editorial"
      />
      <HeroPanel
        eyebrow="Soft editorial layout"
        title={"No scroll,\nno clutter,\njust calm clarity."}
        description="This version leans quiet and editorial. A serif headline carries the emphasis, supporting details stay restrained, and everything essential remains visible in the first view."
        ctaHref="#contact"
        ctaLabel="Start now"
        contactId="contact"
        contactLabel="hello@tin4.dev"
        contactNote="Available for minimal launch pages with a softer visual tone."
        variant="editorial"
      />
    </LandingShell>
  );
}
