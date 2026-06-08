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
      <body className="min-h-dvh bg-canvas font-sans antialiased text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-3 focus:text-sm focus:shadow-lift focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
