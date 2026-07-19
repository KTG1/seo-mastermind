import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holistic SEO Mastermind — Koray Tuğberk Gübür",
  description: "A working room for people building durable organic growth in Kuşadası, Türkiye.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
