import type { Metadata } from "next";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

export const metadata: Metadata = {
  title: "Ed Joshua Ligan — Fullstack Developer",
  description:
    "Portfolio of Ed Joshua Ligan, a fullstack developer specializing in modern web technologies. Building high-performance applications that push boundaries.",
  keywords: [
    "fullstack developer",
    "web developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Ed Joshua Ligan" }],
  openGraph: {
    title: "Ed Joshua Ligan — Fullstack Developer",
    description:
      "Portfolio of Ed Joshua Ligan, a fullstack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
