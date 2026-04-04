import type { ReactNode } from "react";

type LandingShellProps = {
  children: ReactNode;
};

export function LandingShell({ children }: LandingShellProps) {
  return (
    <main className="relative h-screen overflow-hidden bg-[#f6f1e8] text-stone-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(152,167,144,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(210,188,160,0.18),transparent_34%)]" />
      <div className="relative mx-auto flex h-screen w-full max-w-7xl flex-col p-3 sm:p-4 lg:p-5">
        {children}
      </div>
    </main>
  );
}
