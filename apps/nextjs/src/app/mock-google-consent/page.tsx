export default function MockGoogleConsentPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] px-6 py-10 text-stone-900">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-stone-300/80 bg-[#fffdf9]/90 p-8">
        <p className="text-xs font-medium tracking-[0.18em] text-stone-500 uppercase">
          Mock Google Consent
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl tracking-[-0.04em]">
          Google auth redirect reached
        </h1>
        <p className="mt-4 text-sm leading-7 text-stone-700">
          This page exists to prove the browser followed the Better Auth social sign-in URL during
          E2E tests.
        </p>
      </div>
    </main>
  );
}
