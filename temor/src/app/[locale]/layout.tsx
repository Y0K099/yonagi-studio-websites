import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Témor",
  description: "Real-time multiplayer assassination game. Eliminate your targets secretly!",
};

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
  ];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}