import { HeroPanel, LandingShell, TopNav } from "@tin4/ui";

export default function Home() {
  const links = [
    { label: "Contact", href: "#contact" },
  ];

  return (
    <LandingShell>
      <TopNav
        brand="tin4"
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
