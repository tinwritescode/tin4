import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tin4",
  description: "Next.js 16 app in the tin4 Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
