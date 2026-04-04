import Link from "next/link";

import { TopNavAuth } from "@/components/auth/top-nav-auth";

const colonyStats = [
  { label: "Colonies", value: "3", note: "active right now" },
  { label: "Water due", value: "1", note: "within 6 hours" },
  { label: "Feed logged", value: "12", note: "this week" },
];

const recentActivity = [
  {
    title: "Watered sunset chamber",
    meta: "Queen colony · 08:30",
    detail: "Humidity stabilized after a light refill near the cotton port.",
  },
  {
    title: "Fed dubia segment",
    meta: "Outworld tray · 19:10",
    detail: "Workers cleared the protein within 40 minutes.",
  },
  {
    title: "Added diary photo",
    meta: "Brood room · Yesterday",
    detail: "Larvae cluster looks larger than last week.",
  },
];

export default function AntPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef4ec_0%,#f7f3eb_45%,#fffdf9_100%)] text-stone-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col p-3 sm:p-4 lg:p-5">
        <TopNavAuth
          brand="tin4"
          brandHref="/"
          links={[
            { label: "Home", href: "/" },
            { label: "Auth", href: "/auth" },
          ]}
          ctaHref="/auth"
          ctaLabel="Test auth"
          variant="editorial"
        />

        <section className="grid flex-1 gap-4 py-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col rounded-[2rem] border border-stone-300/80 bg-[#fffdf9]/90 p-6 sm:p-8">
            <div className="inline-flex w-fit rounded-full border border-stone-300 bg-white px-3 py-1 text-[0.65rem] font-medium tracking-[0.18em] text-stone-600 uppercase">
              Colony dashboard
            </div>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-heading)] text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              Watch the colony,
              <br />
              log the care,
              <br />
              keep the rhythm.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-700 sm:text-base">
              A simple workspace for colony care: diary photos, feeding records, watering
              reminders, and the latest signals from each enclosure.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {colonyStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[1.5rem] border border-stone-200 bg-white/85 p-4"
                >
                  <p className="text-[0.7rem] font-medium tracking-[0.18em] text-stone-500 uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.04em] text-stone-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{stat.note}</p>
                </article>
              ))}
            </div>

            <div className="mt-auto grid gap-3 border-t border-stone-300 pt-6 sm:grid-cols-2">
              <Link
                href="/auth"
                className="cursor-pointer rounded-full bg-stone-900 px-6 py-3 text-center text-sm font-medium tracking-[0.08em] text-[#fffdf9] uppercase transition-colors duration-200 hover:bg-[#98a790]"
              >
                Test auth flow
              </Link>
              <Link
                href="/"
                className="cursor-pointer rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-medium tracking-[0.08em] text-stone-900 uppercase transition-colors duration-200 hover:bg-stone-50"
              >
                Back home
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <section className="rounded-[2rem] border border-stone-300/80 bg-[#eef4ec]/90 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.18em] text-stone-500 uppercase">
                    Next care window
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.04em]">
                    Water queen colony
                  </h2>
                </div>
                <div className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs tracking-[0.14em] text-stone-600 uppercase">
                  5h left
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                Reminder cadence is every 36 hours. Last watering was logged last night with a
                close-up diary image of the brood chamber.
              </p>
            </section>

            <section className="rounded-[2rem] border border-stone-300/80 bg-white/80 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.18em] text-stone-500 uppercase">
                    Recent activity
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl tracking-[-0.04em]">
                    Diary and care log
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {recentActivity.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-3 rounded-[1.5rem] border border-stone-200 bg-[#fffdf9] p-4 sm:grid-cols-[2rem_1fr]"
                  >
                    <div className="text-sm text-stone-400">{`0${index + 1}`}</div>
                    <div>
                      <p className="text-sm font-medium text-stone-900">{item.title}</p>
                      <p className="mt-1 text-xs tracking-[0.12em] text-stone-500 uppercase">
                        {item.meta}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-stone-700">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
