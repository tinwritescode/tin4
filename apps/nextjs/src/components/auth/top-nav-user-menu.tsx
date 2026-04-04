"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";

type TopNavUserMenuProps = {
  email?: string | null;
  image?: string | null;
  name?: string | null;
};

function getInitials(name?: string | null, email?: string | null) {
  const source = (name?.trim() || email?.trim() || "U").replace(/\s+/g, " ");
  const parts = source.split(" ");

  if (parts.length === 1) {
    return parts[0]!.slice(0, 2).toUpperCase();
  }

  return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
}

export function TopNavUserMenu({
  email,
  image,
  name,
}: TopNavUserMenuProps) {
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleSignOut() {
    setIsSigningOut(true);
    await authClient.signOut();
    window.location.href = "/";
  }

  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded-full border border-stone-300/80 bg-white/85 px-2 py-1.5 text-left outline-none transition-colors duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-stone-400">
        {image ? (
          <span
            aria-label={name ?? email ?? "User avatar"}
            className="block size-9 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
          />
        ) : (
          <span className="flex size-9 items-center justify-center rounded-full bg-[#98a790] text-xs font-medium tracking-[0.12em] text-white uppercase">
            {getInitials(name, email)}
          </span>
        )}
      </summary>
      <div className="absolute right-0 z-20 mt-3 w-72 rounded-[1.5rem] border border-stone-300/80 bg-[#fffdf9]/95 p-4 shadow-[0_24px_60px_-30px_rgba(41,37,36,0.3)] backdrop-blur">
        <p className="text-[0.65rem] font-medium tracking-[0.18em] text-stone-500 uppercase">
          Signed in
        </p>
        <div className="mt-3">
          <p className="font-[family-name:var(--font-heading)] text-2xl tracking-[-0.03em] text-stone-900">
            {name || "Account"}
          </p>
          <p className="mt-1 text-sm text-stone-600">{email}</p>
        </div>
        <div className="mt-4 border-t border-stone-200 pt-4">
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="w-full cursor-pointer rounded-full bg-stone-900 px-4 py-2.5 text-sm font-medium tracking-[0.08em] text-[#fffdf9] uppercase transition-colors duration-200 hover:bg-[#98a790] disabled:cursor-default disabled:opacity-60"
          >
            {isSigningOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      </div>
    </details>
  );
}
