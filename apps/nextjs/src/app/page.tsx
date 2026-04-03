import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-20 text-foreground">
      <div className="flex w-full max-w-4xl flex-col gap-10 rounded-3xl border border-border bg-card p-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
            @tin4/nextjs
          </div>
          <Image src="/next.svg" alt="Next.js logo" width={92} height={18} priority />
        </div>
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr]">
          <section className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight">
              Next.js 16 and Tailwind are installed in the Turborepo app workspace.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              This app lives in <code>apps/nextjs</code> and is wired to shared tooling
              packages for TypeScript, ESLint, and Tailwind configuration.
            </p>
          </section>
          <section className="rounded-2xl border border-border bg-muted/40 p-6">
            <p className="text-sm font-medium text-muted-foreground">Run locally</p>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-background p-4 text-sm leading-6">
              <code>{`bun run dev --filter=@tin4/nextjs`}</code>
            </pre>
          </section>
        </div>
      </div>
    </main>
  );
}
