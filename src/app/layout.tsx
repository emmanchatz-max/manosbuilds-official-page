import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "MANOSBUILDS — Premium Websites for Modern Businesses",
  description:
    "MANOSBUILDS is an independent digital studio in Greece creating premium, high-performing websites for businesses, hotels, restaurants, and modern brands.",
  metadataBase: new URL("https://manosbuilds.com"),
  openGraph: {
    title: "MANOSBUILDS",
    description:
      "Premium, high-performing websites designed to help modern businesses stand out and grow online.",
    type: "website",
    url: "https://manosbuilds.com"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative min-h-dvh overflow-x-clip bg-canvas font-sans antialiased text-ink">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -left-32 -top-36 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -right-36 -top-48 h-[620px] w-[620px] rounded-full bg-black/5 blur-3xl" />
          <div className="absolute left-1/2 top-[62%] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
        </div>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-3 focus:text-sm focus:shadow-lift focus:outline-none"
        >
          Skip to content
        </a>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
