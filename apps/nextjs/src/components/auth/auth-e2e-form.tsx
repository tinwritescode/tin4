"use client";

import { useState } from "react";

type AuthState = {
  kind: "idle" | "success" | "error";
  message: string;
};

type SocialSignInResponse = {
  redirect?: boolean;
  url?: string;
};

const initialState: AuthState = {
  kind: "idle",
  message: "",
};

export function AuthE2EForm() {
  const isReady = typeof window !== "undefined";
  const [email, setEmail] = useState("keeper@example.com");
  const [password, setPassword] = useState("password1234");
  const [name, setName] = useState("Ant Keeper");
  const [state, setState] = useState<AuthState>(initialState);

  async function signInWithEmail() {
    setState(initialState);

    const response = await fetch("/api/auth/sign-in/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      setState({
        kind: "error",
        message: "Email sign-in failed",
      });
      return;
    }

    setState({
      kind: "success",
      message: "Email sign-in request sent",
    });
  }

  async function signUpWithEmail() {
    setState(initialState);

    const response = await fetch("/api/auth/sign-up/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (!response.ok) {
      setState({
        kind: "error",
        message: "Email sign-up failed",
      });
      return;
    }

    setState({
      kind: "success",
      message: "Email sign-up request sent",
    });
  }

  async function signInWithGoogle() {
    setState(initialState);

    const response = await fetch("/api/auth/sign-in/social", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        provider: "google",
        callbackURL: "/",
        disableRedirect: true,
      }),
    });

    if (!response.ok) {
      setState({
        kind: "error",
        message: "Google sign-in failed",
      });
      return;
    }

    const data = (await response.json()) as SocialSignInResponse;

    if (data.url) {
      setState({
        kind: "success",
        message: "Redirecting to Google sign-in...",
      });

      window.location.href = data.url;
      return;
    }

    setState({
      kind: "success",
      message: "Google sign-in request sent",
    });
  }

  return (
    <main className="min-h-screen bg-[#f6f1e8] px-6 py-10 text-stone-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-[2rem] border border-stone-300/80 bg-[#fffdf9]/90 p-6 sm:p-8">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-stone-500 uppercase">
            Auth Playground
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
            Test email auth and Google auth without leaving the app.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-700">
            This screen exists to support end-to-end auth testing while the full auth UI is still
            being built.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            <span className="text-stone-600">Name</span>
            <input
              data-testid="auth-name"
              className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition-colors focus:border-stone-500"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className="flex flex-col gap-2 text-sm">
            <span className="text-stone-600">Email</span>
            <input
              data-testid="auth-email"
              className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition-colors focus:border-stone-500"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-stone-600">Password</span>
          <input
            data-testid="auth-password"
            className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition-colors focus:border-stone-500"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            data-testid="sign-in-email"
            type="button"
            onClick={signInWithEmail}
            className="cursor-pointer rounded-full bg-stone-900 px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#fffdf9] uppercase transition-colors duration-200 hover:bg-[#98a790]"
          >
            Sign in with email
          </button>
          <button
            data-testid="sign-up-email"
            type="button"
            onClick={signUpWithEmail}
            className="cursor-pointer rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium tracking-[0.08em] text-stone-900 uppercase transition-colors duration-200 hover:bg-stone-50"
          >
            Sign up with email
          </button>
          <button
            data-testid="sign-in-google"
            type="button"
            onClick={signInWithGoogle}
            className="cursor-pointer rounded-full border border-[#98a790] bg-[#98a790] px-6 py-3 text-sm font-medium tracking-[0.08em] text-white uppercase transition-colors duration-200 hover:bg-[#86947f]"
          >
            Continue with Google
          </button>
        </div>

        <div
          data-testid="auth-status"
          className="min-h-10 rounded-2xl border border-dashed border-stone-300 px-4 py-3 text-sm text-stone-700"
        >
          {state.message || "No auth action triggered yet."}
        </div>

        <div data-testid="auth-ready" suppressHydrationWarning className="text-xs text-stone-400">
          {isReady ? "ready" : "booting"}
        </div>
      </div>
    </main>
  );
}
